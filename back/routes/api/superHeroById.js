const express = require('express');

const router = express.Router();
const db = require('../../connection');

router.get('/superheros/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM superhero WHERE id = ?', [id], (err, results) => {
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
