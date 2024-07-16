const express = require("express");
require('dotenv').config();
require("./db/db_conection");
const User = require("./modules/todos/user_modules");
const Todo = require("./modules/todos/todos_modules");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

console.log(PORT);

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.post("/todos", async (req, res) => {
    const { userName, password } = req.body;

    try {
        const addUser = new User({ userName: userName, password: password });
        await addUser.save();

        res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding user", error: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await User.findOne({ userName });
        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await user.comparePassword(password);

        console.log(isMatch);
        if (!isMatch) {
            throw new Error("Incorrect password");
        }

        res.status(201).json({ message: "User added successfully" });
        console.log("User logged in successfully");

    } catch (error) {
        res.status(500).json({ message: "Error adding user", error: error.message });

    }
})

app.post("/user/todos", async (req, res) => {
    const { content, complete } = req.body;

    try {
        const addUser = new Todo({ content: content, complete: complete });
        await addUser.save();

        res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding user", error: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
