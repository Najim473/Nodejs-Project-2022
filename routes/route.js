const express = require("express");
const router = express.Router();
const bookRouter = require('./book');
router.get("/", (req, res) => {
    // myEvent.emit("test-event", { name: 'Najim Uddin' });
    res.send('Hello World');
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
router.use(bookRouter);
router.all("/*", (req, res) => {
    res.send("Page Not Found");
})
module.exports = router;