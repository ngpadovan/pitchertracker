const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const pitchersCtrl = require('../controllers/pitchers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /pitchers
router.get('/', pitchersCtrl.index);
// GET /pitchers/new
router.get('/new', ensureLoggedIn, pitchersCtrl.new);
// GET /pitchers/:id (show functionality) MUST be below new route

	
module.exports = router;