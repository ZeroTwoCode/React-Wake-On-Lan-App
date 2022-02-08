import { useRef } from 'react'
import AddDeviceButton from '../components/addDeviceButton'
import AddDeviceModal from '../components/addDeviceModal'
import Snackbar from "../components/snackbar"
import WoLManual from "../components/WoLManual"
import DeviceList from "../components/deviceList"

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
            <DeviceList
                snackbarRef={snackbarRef}
            />
            <p className="sm:text-sm text-neutral-500 text-center py-4">Designed and built by <a className="underline text-neutral-400" href="https://github.com/ZeroTwoCode" target="_blank">ZeroTwoCode</a></p>
        </div>
    )
}

export default Home