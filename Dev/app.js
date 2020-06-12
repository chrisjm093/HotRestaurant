const express = require("express");

const app = express();
/* const PORT = 3000;  */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Listening on Port! " + PORT);
});
