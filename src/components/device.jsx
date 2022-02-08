import env from 'react-dotenv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const Device = (props) => {

    const { deviceID, name, mac, snackbarRef } = props

    const wake = () => {
        //Request endpoint to wake device
        fetch(`${env.API_ENDPOINT}/wake`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mac: mac.trim()
                })
            })
        .then(async res => {
            //Parse JSON response
            return {status: res.status, json: await res.json()}
        })
        .then(resJSON => {
            //Trigger snackbar
            snackbarRef.current.show({type: resJSON.status === 200 ? 'success' : 'error', message: resJSON.json})
        })
    }

    return (
        <li key={deviceID} className="p-3 flex flex-wrap flex-grow items-center min-w-[300px] bg-gray-100 shadow-md rounded-md">
            <FontAwesomeIcon className="h-6 mr-3" icon={faDesktop} />
            <span className="flex-grow">
                <p className="lbl-primary">{name}</p>
                <p className="lbl-primary text-xs text-neutral-500">{mac}</p>
            </span>
            <button onClick={wake} className="btn-primary ml-3">Wake</button>
        </li>
    )
}

export default Device