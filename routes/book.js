const express = require("express");
const bookRouter = express.Router();
const path = require('path');
bookRouter.route("/").get((req, res) => {
    res.sendFile(path.join(__dirname, '../page/book.html'));
}).post((req, res) => {
    res.json({ data: "Book is stored" });
})
bookRouter.get("/:id", (req, res) => {
    res.send(`Single Books ${req.params.id}`)
})
module.exports = bookRouter;