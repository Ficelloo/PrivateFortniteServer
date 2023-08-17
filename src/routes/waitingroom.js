const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("Waitingroom api")
});

router.get('/api/waitingroom', (req, res) => {
    res.status(204);
    res.end();
});

module.exports = router;