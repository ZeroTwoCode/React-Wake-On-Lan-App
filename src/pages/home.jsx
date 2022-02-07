import { useRef } from 'react'
import AddDeviceButton from '../components/addDeviceButton'
import AddDeviceModal from '../components/addDeviceModal'
import Snackbar from "../components/snackbar"
import WoLManual from "../components/WoLManual"

const Home = () => {

    const snackbarRef = useRef(null)
    const addDeviceModalRef = useRef(null)

    return (
        <div className="p-5">
            <AddDeviceButton
                addDeviceModalRef={addDeviceModalRef}
            />
            <AddDeviceModal
                ref={addDeviceModalRef}
            />
            <Snackbar
                ref={snackbarRef}
            />
            <WoLManual
                snackbarRef={snackbarRef}
            />
        </div>
    )
}

export default Home