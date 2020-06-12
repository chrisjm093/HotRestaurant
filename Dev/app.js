








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
