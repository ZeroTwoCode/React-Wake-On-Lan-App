import env from 'react-dotenv'
import { useForm } from 'react-hook-form'

const WoLManual = (props) => {

    const { snackbarRef } = props

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = data => {
        //Request endpoint to wake device
        fetch(`${env.API_ENDPOINT}/wake`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mac: data.mac.trim()
                })
            })
        .then(async res => {
            //Parse JSON response
            return {status: res.status, json: await res.json()}
        })
        .then(resJSON => {
            //Reset field if successful
            if(resJSON.status === 200) reset({ mac: '' })
            //Trigger snackbar
            snackbarRef.current.show({type: resJSON.status === 200 ? 'success' : 'error', message: resJSON.json})
        })
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-wrap items-center justify-center gap-3 rounded-lg shadow-lg p-5 bg-gray-100 max-w-screen-md mx-auto">
            <label className="block text-sm font-medium text-gray-700">
            Mac address
            </label>
            <input
                { ...register('mac') }
                type='text'
                placeholder='xx:xx:xx:xx:xx:xx'
                className='min-w-[140px] border-[1px] focus:outline-0 focus:border-1 block shadow-sm p-2 sm:text-sm border-gray-200 rounded-md w-1/2'
            />
            <input
                type="submit"
                value="Send WoL Packet"
                className="cursor-pointer bg-red-500 px-4 py-2 sm:text-sm shadow-md hover:shadow-lg hover:bg-red-550 rounded-full text-gray-800"
            />
        </form>
    )
}

export default WoLManual