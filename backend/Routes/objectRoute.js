
const express = require('express');
const router = express.Router();
const { uploadObject } = require('../Controllers/objectController');


module.exports = router;
router.post('/upload', uploadObject);


