import { useState, forwardRef, useImperativeHandle } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [type, setType] = useState()
    const [message, setMessage] = useState()

    useImperativeHandle(ref, () => ({
        show(data) {
            setType(data.type)
            setMessage(data.message)
            setShowSnackbar(true)
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000)
        }
    }))

    return (
        <div
            className={`${showSnackbar ? 'right-10 opacity-100' : 'right-[-100px] opacity-0'} fixed flex bottom-5 ${type === 'success' ? "bg-green-500" : "bg-red-500"} rounded-lg shadow-sm overflow-hidden transition-all`}>
            <span className={`py-[0.65rem] px-2 ${type === 'success' ? "bg-green-400 text-green-600" : "bg-red-400 text-red-600"}`}>
                {type === 'success' ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faExclamationCircle} />}
            </span>
            <p className="p-3 sm:text-sm text-gray-800">
                {message}
            </p>
        </div>
    )
})

export default Snackbar