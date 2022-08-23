// USING EXPRESSJS 
// const EventEmitter = require("events");
// const myEvent = new EventEmitter();
// myEvent.on("test-event", (data) => {
//     console.log(data);
//     console.log("This event is listening");
// })
const express = require('express')
const routes = require("./routes/route");
const app = express();
app.set("view engine", "pug");
app.use(routes);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})