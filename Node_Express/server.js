const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

const data = [
    { name: "Mathilde", id: 1 },
    { name: "Benjamin", id: 2 },
    { name: "Tobias", id: 3 },
    { name: "Roberta", id: 4 },
    { name: "Yasmin", id: 5 }
]

app.get("/people", (req, res) => {
    res.send(data);
})

app.get("/people/:id", (req, res) => {
    console.log([req.params.id]);
    res.send(res.params.id);
})

app.post("/people", (req, res) => {
    data.push(req.body);

    res.send(req.body);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})