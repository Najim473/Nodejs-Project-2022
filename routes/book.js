const express = require("express");
const bookRouter = express.Router();
bookRouter.route("/book").get((req, res) => {
    res.send("All Books");
}).post((req, res) => {
    res.json({ data: "Book is stored" });
})
bookRouter.get("/book/:id", (req, res) => {
    res.send(`Single Books ${req.params.id}`)
})
module.exports = bookRouter;