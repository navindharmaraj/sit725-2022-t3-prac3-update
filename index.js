var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views';

//Services
var calculation = require("./services/calculation");
app.use(express.static('assests'));

router.get("/", function (req, res) {
    res.sendFile(path + "/index.html");
});

app.use("/", router);
app.get("/addTwoNumbers",calculation.addition )//Function to add 2 numbers
app.post("/addition",calculation.n_addition )//Function to add n numbers
app.post("/subTwoNumbers",calculation.subtraction )//Function to subtract 2 numbers
app.put("/updateArray",calculation.updateArray )//Function to subtract 2 numbers
app.delete("/deleteArray",calculation.deleteArray )//Function to subtract 2 numbers
app.listen(3000, function () {
    console.log("Live at Port 3000");
});