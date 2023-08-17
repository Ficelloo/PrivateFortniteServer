const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("eulatracking api")
});

router.get('/api/shared/agreements/fn', (req, res) => {
    res.json({})
});

module.exports = router;