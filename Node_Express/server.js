const express = require("express");
const User = require('./User');
const app = express();
const db = require("./db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());
const port = 3000;

app.get("/people", async function (req, res) {
    try {
        let result = await db.query("SELECT * FROM people");
        res.send(result);
    } catch (error) {
        res.status(404).send("error:", error)
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
    let sqlId = "SELECT MAX(ID) FROM people";
    let maxId;
    try {
        maxId = await db.query(sqlId) + 1;
    } catch (error) {
        res.status(400).send(error.message)
    }
    let sql = "INSERT INTO people values(?,?,?)";
    try {
        let result = await db.query(sql, [maxId, person.firstname, person.lastname]);
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
    console.log(id);
    res.send(id);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        //  await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});