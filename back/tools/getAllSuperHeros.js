const heros = require('./superheros');
require('../env')
const db = require('../connection');

const heroObj = heros.map((hero) => {
  return [
    hero.id,
    hero.name || 'unknown',
    hero.powerstats.intelligence,
    hero.powerstats.strength,
    hero.powerstats.speed,
    hero.powerstats.durability,
    hero.powerstats.power,
    hero.powerstats.combat,
    hero.appearance.gender || 'unknown',
    hero.appearance.race || 'unknown',
    hero.appearance.height[1] || 'unknown',
    hero.appearance.weight[1] || 'unknown',
    hero.appearance.eyeColor || 'unknown',
    hero.appearance.hairColor || 'unknown',
    hero.biography.fullName || 'unknown',
    hero.biography.placeOfBirth || 'unknown',
    hero.biography.alignment || 'unknown',
    hero.work.occupation || 'unknown',
    hero.work.base || 'unknown',
    hero.connections.groupAffiliation || 'unknown',
    hero.connections.relatives || 'unknown',
    hero.images.xs || 'unknown',
    hero.images.sm || 'unknown',
    hero.images.md || 'unknown',
    hero.images.lg || 'unknown',
  ];
});

db.query('INSERT INTO superhero (id, name, intelligence, strength, speed, durability, power, combat, gender, race, height, weight, eyeColor, hairColor, fullName, placeOfBirth, alignment, occupation, base, groupAffiliation, relatives, imageXs, imageSm, imageMd, imageLg) VALUES ?', [heroObj]);
