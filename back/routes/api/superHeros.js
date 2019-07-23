const express = require('express');

const router = express.Router();
const db = require('../../connection');

router.get('/superheros', (req, res) => {
  db.query('SELECT * FROM superhero', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    return res.json(results);
  });
});

router.post('/superheros', (req, res) => {
  const heroProfile = {
    name: req.body.name,
    fullName: req.body.fullName,
    intelligence: req.body.intelligence,
    strength: req.body.strength,
    speed: req.body.speed,
    combat: req.body.combat,
    durability: req.body.durability,
    power: req.body.power,
    combat: req.body.combat,
    gender: req.body.gender,
    race: req.body.race,
    height: req.body.height,
    weight: req.body.weight,
    eyeColor: req.body.eyeColor,
    hairColor: req.body.hairColor,
    placeOfBirth: req.body.placeOfBirth,
    alignment: req.body.alignment,
    occupation: req.body.occupation,
    base: req.body.base,
    groupAffiliation: req.body.groupAffiliation,
    relatives: req.body.relatives,
    imageSm: req.body.imageSm,
  };
  db.query('INSERT INTO superhero SET ?;', [heroProfile], (err) => {
    if (err) {
      res.status(500).send('Houston, we have a problem');
      console.log(err.message)
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;

