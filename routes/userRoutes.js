const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../UserDataBase.json");

const getDataFromFile = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

router.get('/test', (req, res) => {
    res.send({
        message: "Welcome to user API",
        path: filePath 
    });
});

router.get('/users', (req, res) => {
    const users = getDataFromFile();
    res.send(users);
});

router.get('/users/:id', (req, res) => {
    const users = getDataFromFile();
    const userId = req.params.id;

    const user = users.find(user => user.id === parseInt(userId));

    if(!user) {
        res.status(404).json({error: "User not found!"});
    } else {
        res.send(user);
    }
});

module.exports = router;