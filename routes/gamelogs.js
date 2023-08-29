const express = require('express');
const router = express.Router();
const gameLogsCtrl = require('../controllers/gamelogs');



router.get('/pitchers/:id', gameLogsCtrl.new);
router.post('/pitchers/:id/gamelogs', gameLogsCtrl.create);

module.exports = router;