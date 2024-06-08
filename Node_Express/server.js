const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("./db")

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

app.get("/users", async function (req, res) {
    try {
        let result = await db.query("SELECT * FROM users");
        res.send(result);
    } catch (error) {
        res.status(404).send("error:", error.message);
    }
})

app.get("/people/:id", async function (req, res) {
    let personId = req.params.id;
    let sql = "SELECT firstname, lastname FROM people WHERE id=?";
    try {
        let result = await db.query(sql, [personId]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
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
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let sql = "INSERT INTO users (username, userpassword) values (?,?)";
    try {
        let result = await db.query(sql, [username, hashedPassword]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.massage);
    }
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
    try {
        const { username, userpassword } = req.body;
        let sql = "SELECT * FROM users WHERE username=?";
        try {
            const user = await db.query(sql, [username]);
            if (!user) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            const passwordMatch = await bcrypt.compare(userpassword, user[0].userpassword);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Wrong password' });
            }
            const token = jwt.sign({ id: user[0].id }, 'your-secret-key', {
                expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (error) {
            res.status(404).send(error.massage);
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

module.exports = app;