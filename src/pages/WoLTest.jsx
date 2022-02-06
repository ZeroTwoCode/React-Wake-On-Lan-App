import env from 'react-dotenv'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function WoLTest() {
    const { register, handleSubmit, reset } = useForm()
    const [ responseStatus, setResponseStatus ] = useState()
    const [ responseMsg, setResponseMsg ] = useState()

    const onSubmit = data => {
        //Clear response message before next request
        setResponseMsg()
        //Request endpoint to wake device
        fetch(`${env.API_ENDPOINT}/wake`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        .then(res => {
            //Reset field if successful
            if(res.status == 200) reset({ mac: '' })
            //Set response status state
            setResponseStatus(res.status)
            //Parse JSON response
            return res.json()
        })
        .then(resJSON => {
            //Set response message
            setResponseMsg(resJSON)
        })
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="flex flex-wrap items-center justify-center rounded-lg shadow-lg p-5 bg-gray-100 max-w-screen-md mx-auto">
            <label className="block text-sm mr-3 font-medium text-gray-700">
            Mac address
            </label>
            <input
                { ...register('mac') }
                type='text'
                placeholder='xx:xx:xx:xx:xx:xx'
                className='mt-1 border-[1px] focus:outline-0 focus:border-1 block shadow-sm p-2 sm:text-sm border-gray-200 rounded-md w-1/2'
            />
            <input
                type="submit"
                value="Send WoL Packet"
                className="ml-5 cursor-pointer bg-red-500 px-4 py-2 sm:text-sm shadow-md hover:shadow-lg hover:bg-red-550 rounded-full text-gray-800"
            />
            <p
                className={`
                    mt-5
                    ${responseStatus !== 200 ? "text-red-500" : "text-green-500"}
                    sm:text-sm
                `}
            >{ responseMsg }</p>
        </form>
    )
}