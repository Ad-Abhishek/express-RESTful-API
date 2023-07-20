const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../UserDataBase.json");

const getDataFromFile = () => {
    const data = fs.readFileSync(filePath);
    return data;
}

router.get('/test', (req, res) => {
    res.send({
        message: "Welcome to user API",
        path: filePath 
    });
});

router.get('/users', (req, res) => {
    const users = getDataFromFile();
    res.send(JSON.parse(users));
});

module.exports = router;