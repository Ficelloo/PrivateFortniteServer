const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("Fortnite api")
});

router.get('/api/versioncheck', (req, res) => {
    res.json({})
});

router.get('/api/cloudstorage/system', (req, res) => {
    res.json({})
});

router.get('/api/game/v2/enabled_features', (req, res) => {
    res.json([])
})

router.get('/api/cloudstorage/user/ficello', (req, res) => {
    res.json([])
})

router.get('/api/game/v2/twitch/:accountId', (req, res) => {
    res.json({})
})

router.get('/api/game/v2/world/info', (req, res) => {
    res.json({})
})

router.get('/api/receipts/v1/account/:accountId/receipts', (req, res) => {
    res.json({})
})

router.get('/api/matchmaking/session/findPlayer/:accountId', (req, res) => {
    res.json([])
})

router.post('/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
    res.send("true") // response can be better ngl
})

router.post('/api/game/v2/grant_access/:accountId', (req, res) => {
    res.status(200).send()
})

router.post('/api/game/v2/profile/:accountId/client/QueryProfile', (req, res) => {
    res.json({})
})

router.post('/api/game/v2/profile/:acoountId/client/ClientQuestLogin', (req, res) => {
    res.json({})
})

router.post('/api/game/v2/profile/:accountId/client/RefreshExpeditions', (req, res) => {
    res.json({})
})

module.exports = router;