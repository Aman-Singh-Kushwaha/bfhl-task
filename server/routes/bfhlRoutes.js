// src/routes/bfhlRoutes.js
const express = require('express');
const { handlePostRequest, handleGetRequest } = require('../controllers/bfhlController');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/bfhl', validateRequest, handlePostRequest);
router.get('/bfhl', handleGetRequest);

module.exports = router;
