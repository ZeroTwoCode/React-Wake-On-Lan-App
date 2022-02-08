import env from 'react-dotenv'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

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
            <label className="lbl-primary">
            Mac address
            </label>
            <input
                { ...register('mac') }
                type='text'
                placeholder='xx:xx:xx:xx:xx:xx'
                className='min-w-[140px] w-1/2 txt-primary'
            />
            <button className="btn-primary relative cursor-pointer">
                <input type="submit" value=" " className="absolute top-0 left-0 w-full h-full cursor-pointer" />
                <FontAwesomeIcon className="text-md" icon={faPowerOff} />
            </button>
        </form>
    )
}

export default WoLManual