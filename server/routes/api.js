const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/data', dataController.retrieveData);

router.post('/data', dataController.insertData);

module.exports = router;