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

module.exports = router;
