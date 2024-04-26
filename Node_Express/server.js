const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const data = [
    { id: 1, name: "Mathilde", age: 29 },
    { id: 2, name: "Benjamin", age: 45 },
    { id: 3, name: "Tobias", age: 34 },
    { id: 4, name: "Roberta", age: 40 },
    { id: 5, name: "Yasmin", age: 22 }
]

app.get("/people", (req, res) => {
    res.send(data);
})

app.get("/people/:id", (req, res) => {
    let id = req.params.id;
    let dataId = data.findIndex((person) => person.id == id);
    if (dataId == -1) { res.send("Object not available"); }
    res.send(data[dataId]);
})

app.post("/people", (req, res) => {
    data.push(req.body);
    res.send(req.body);
})

app.delete("/people/:id", (req, res) => {
    let id = req.params.id;
    let dataId = data.findIndex((person) => person.id == id);
    if (dataId == -1) { res.send("Object not available"); }
    else {
        data.splice(dataId, 1);
        res.send("done");
    }
})

app.put("/people/:id", (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.send(id);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})