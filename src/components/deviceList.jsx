import Device from './device'
import { useState, useEffect } from 'react'

//Temp array until data fetch is built
const tempdevices = [
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },

    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 1,
        name: "Device 1",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 2,
        name: "Device 2",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 3,
        name: "Device 3",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 4,
        name: "Device 4",
        mac: "aa:aa:aa:aa:aa:aa"
    },
    {
        ID: 5,
        name: "Device 5",
        mac: "aa:aa:aa:aa:aa:aa"
    }
]

const DeviceList = props => {

    const [devices, setDevices] = useState([])

    useEffect(() => {
        setDevices(tempdevices)
    })

    return (
        <ul className="w-full flex my-5 flex-wrap gap-3 max-w-screen-md mx-auto max-h-[calc(100vh - 100px]">
            {devices.map(device => (
                <Device
                    deviceID={device.ID}
                    name={device.name}
                    mac={device.mac}
                    snackbarRef={props.snackbarRef}
                />
            ))}
        </ul>
    )
}

export default DeviceList