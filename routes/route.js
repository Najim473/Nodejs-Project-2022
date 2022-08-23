const express = require("express");
const router = express.Router();
const bookRouter = require('./book');
const path = require("path");
router.get("/", (req, res) => {
    // myEvent.emit("test-event", { name: 'Najim Uddin' });
    res.render("index", { name: "Sajjad" });
});
// router.route("/book").get((req, res) => {
//     res.send("All Books");
// }).post((req, res) => {
//     res.json({ data: "Book is stored" });
// })
// router.get("/book", (req, res) => {
//     res.send("All Books");
// })
// router.get("/book/:id", (req, res) => {
//     console.log(req.params);
//     res.send("Single Books")
// })
// router.get("/book/:id", (req, res) => {
//     res.send(`Single Books ${req.params.id}`)
// })

router.post("/", (req, res) => {
    // myEvent.emit("test-event", { name: 'Najim Uddin' });
    res.json({ data: "Hello World from post method" });
});
router.use("/book", bookRouter);
router.all("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../page/error.html"))
})
module.exports = router;