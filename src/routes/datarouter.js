const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("Datarouter api")
});

router.post('/api/v1/public/data', (req, res) => {
    res.status(204);
    res.end();
});

module.exports = router;