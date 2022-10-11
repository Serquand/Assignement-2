const uuid = require("uuid")

let allEvents = [
    { name: "Test - 1", author: "Serquand", description: "This is a test !", id: uuid.v4() }, 
    {  name: "Test - 2", author: "Esteban", description: "This is a second test !", id: uuid.v4() }
]


const postEvent = (req, res) => {
    req.body.id = uuid.v4()
    allEvents.push(req.body)
    
    res.status(201).json(allEvents)
}

const deleteEvent = (req, res) => {
    let temp = allEvents
    allEvents = []

    for(let i = 0; i < temp.length; i++) {
        if(temp[i].id != req.params.idEvent) allEvents.push(temp[i]) 
    }
    res.status(201).json(allEvents)
}

const getEvents = (req, res) => {
    res.status(201).json(allEvents)
} 

module.exports = { postEvent, getEvents, deleteEvent }