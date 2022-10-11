const allEvents = new Array(0)
const uuid = require("uuid")

const postEvent = (req, res) => {
    req.body.id = uuid.v4()
    allEvents.push(req.body)
    
    res.status(201).json(allEvents)
}

const deleteEvent = (req, res) => {
    allEvents.filter(event => event.id != req.params.idEvent)
    res.status(201).json(allEvents)
}

const getEvents = (req, res) => res.status(201).json(allEvents)

module.exports = { postEvent, getEvents, deleteEvent }