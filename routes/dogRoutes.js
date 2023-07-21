const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../dogsInfo.json");

const getDogsFromFile = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

router.get('/', (req, res) => {
    res.send({
        message: "this is dog API.",
        path: filePath
    })
})

router.get('/dogs', (req, res) => {
    const dogs = getDogsFromFile();
    res.send(dogs);
})

router.get('/dogs/:id', (req, res) => {
    const dogs = getDogsFromFile();
    const dogId = req.params.id;

    const dog = dogs.find(dog => dog.id === parseInt(dogId));

    if(!dog) {
        res.status(404).json({error: "Dog not found!"});
    } else {
        res.send(dog);
    }
})


module.exports = router;