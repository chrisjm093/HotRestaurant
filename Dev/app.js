const express = require("express");
const path = require("path");
const app = express();
/* const PORT = 3000;  */
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.listen(PORT, function () {
  console.log("Listening on Port! " + PORT);
});

const waitList = [];
const reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/Templates/home.html"))
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/Templates/reserve.html"))
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/Templates/tables.html"))
});

app.get("/api/reservations", function(req, res){
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitList);
});

app.post("/api/reservations", function(req, res) {
    var newReservation = req.body;

   // newReservation.uniqueID = newReservation.name.replace(/\s+/g, "").toLowerCase();

    if( reservations.length > 5 ){
        toWaitlist(newReservation)
       
    } else {

        reservations.push(newReservation);

        res.json(newReservation);
    }
    

});

function toWaitlist(newReservation){
   
    app.post("/api/waitlist", function(req, res) {
        
        waitList.push(newReservation);
        
        res.json(newReservation);
        
        console.log(newReservation);
       
       
    })
};
