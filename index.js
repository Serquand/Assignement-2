const express = require("express");
const app = express();
const path = require('path');
const { postEvent, getEvents, deleteEvent }  = require("./middlewares/event")
const cors = require("cors")

const PORT = process.env.PORT || 5000;

app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


app.post("/createEvent", postEvent)
app.get("/getEvents", getEvents)
app.delete("/:idEvent", deleteEvent)