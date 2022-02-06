module.exports = (req, res) => {
    const wol = require('wake_on_lan')

    const { mac } = req.body
    const macRegex = /^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/
    
    if(!mac) {
        res.status(400).json('No mac address')
    } else if(!macRegex.test(mac)) {
        res.status(400).json('Malformed mac address')
    } else {
        wol.wake(mac, err => {
            if(err) {
                res.status(500).json(err)
            } else {
                res.json(`Sent wake on lan packet to ${mac}`)
            }
        })
    }
}
