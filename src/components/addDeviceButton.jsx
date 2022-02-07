import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddDeviceButton = (props) => {
    const { addDeviceModalRef } = props

    return (
        <button onClick={() => {addDeviceModalRef.current.show()}} className="rounded-full h-[3.5rem] w-[3.5rem] fixed right-5 bottom-5 bg-red-500 shadow-md">
            <FontAwesomeIcon className="text-gray-800 text-2xl" icon={faPlus} />
        </button>
    )
}

export default AddDeviceButton