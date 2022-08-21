// USING EXPRESSJS 
// const EventEmitter = require("events");
// const myEvent = new EventEmitter();
// myEvent.on("test-event", (data) => {
//     console.log(data);
//     console.log("This event is listening");
// })
const express = require('express')
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
    // myEvent.emit("test-event", { name: 'Najim Uddin' });
    res.send('Hello World');
})
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})