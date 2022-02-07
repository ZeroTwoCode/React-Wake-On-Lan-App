import { useRef } from 'react'
import Snackbar from "../components/snackbar"
import WoLManual from "../components/WoLManual"

const Home = () => {

    const snackbarRef = useRef(null)

    return (
        <div className="p-5">
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