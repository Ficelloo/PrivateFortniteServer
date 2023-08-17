const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("lightswitch api")
});

router.get('/api/service/bulk/status', (req, res) => {
  res.json(
    [{
        "allowedActions": [],
        "serviceInstanceId": "Fortnite",
        "maintenanceUri": null,
        "status": "UP", // RESTRICTED, DOWN, UP
        "message": "lmao",
        "timeToShutdownInMs": null, // maybe for events
        "banned": false,
    }]
)
});

module.exports = router;