const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
const port = 3000;

app.get("/people", async function (req, res) {
    try {
        let result = await db.query("SELECT * FROM people");
        res.send(result);
    } catch (error) {
        res.status(404).send("error:", error);
    }
})

app.get("/people/:id", async function (req, res) {
    let personId = req.params.id;
    let sql = "SELECT firstname, lastname FROM people WHERE id=?";
    try {
        let result = await db.query(sql, [personId]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.massage);
    }
})

app.post("/people", async function (req, res) {
    let person = req.body;
    let sql = "INSERT INTO people (firstname, lastname) values(?,?)";
    try {
        let result = await db.query(sql, [person.firstname, person.lastname]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.massage);
    }
})

app.delete("/people/:id", async function (req, res) {
    let personId = req.params.id;
    let sql = "DELETE FROM people WHERE id=?";
    try {
        let result = await db.query(sql, [personId]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.massage);
    }
})

app.put("/people/:id", async function (req, res) {
    let id = req.params.id;
    let person = req.body;
    let sql = "UPDATE people SET firstname=?, lastname=? WHERE id=?";
    try {
        let result = await db.query(sql, [person.firstname, person.lastname, id]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.massage);
    }
    res.send(id);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})