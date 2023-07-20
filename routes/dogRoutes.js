const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../dogsInfo.json");

const getDogsFromFile = () => {
    const data = fs.readFileSync(filePath);
    return data;
}

router.get('/', (req, res) => {
    res.send({
        message: "this is dog API.",
        path: filePath
    })
})

router.get('/dogs', (req, res) => {
    const dogs = getDogsFromFile();
    res.send(JSON.parse(dogs));
})


module.exports = router;