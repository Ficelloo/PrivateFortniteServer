const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status("Account api")
});

router.post('/api/oauth/token', (req, res) => {
    res.json({
        "access_token": "besttoken",
        "expires_in": 123456,
        "expires_at": "3000-10-02T04:00:00.100Z",
        "token_type": "bearer", // Security authorization, bearer or eg1???
        "refresh_token": "besttoken",
        "refresh_expires": 123456,
        "refresh_expires_at": "3000-10-02T04:00:00.100Z",
        "account_id": "ficello",
        "client_id": "clientidlmao",
        "client_service": "fortnite",
        "additionalInformation": null
    })
});

router.get('/api/public/account/:accountId', (req, res) => {
    res.json({
        "access_token": "besttoken",
        "expires_in": 123456,
        "expires_at": "3000-10-02T04:00:00.100Z",
        "token_type": "bearer", // Security authorization
        "refresh_token": "besttoken",
        "refresh_expires": 123456,
        "refresh_expires_at": "3000-10-02T04:00:00.100Z",
        "account_id": req.params.accountId,
        "client_id": "clientidlmao",
        "client_service": "fortnite",
        "additionalInformation": null
    })
})

router.post('/api/oauth/verify', (req, res) => {
    res.json({
        "access_token": "besttoken",
        "expires_in": 123456,
        "expires_at": "3000-10-02T04:00:00.100Z",
        "token_type": "bearer", // Security authorization, bearer or eg1???
        "refresh_token": "besttoken",
        "refresh_expires": 123456,
        "refresh_expires_at": "3000-10-02T04:00:00.100Z",
        "account_id": "ficello",
        "client_id": "clientidlmao",
        "client_service": "fortnite",
        "additionalInformation": null
    })
});

router.get('/api/epicdomains/ssodomains', (req, res) => {
    res.json({})
})

router.delete('/api/oauth/sessions/kill/:access_token', (req, res) => {
    res.json({})
})

router.get('/api/public/account/:accountId/externalAuths', (req, res) => {
    res.json({})
})

module.exports = router;