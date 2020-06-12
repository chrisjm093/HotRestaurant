<<<<<<< HEAD
const express = require("express");

const app = express();
/* const PORT = 3000;  */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Listening on Port! " + PORT);
});
=======









const waitList = [];
const reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/reserver", function(req, res) {
    res.sendFile(path.join(__dirname, "reserver.html"))
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
})
>>>>>>> 01ab8d452a2a171f0b0f3291cbb47d9f36f28b26
