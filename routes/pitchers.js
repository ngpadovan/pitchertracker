const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const pitchersCtrl = require('../controllers/pitchers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/index', pitchersCtrl.index);
router.get('/new', ensureLoggedIn, pitchersCtrl.new);
router.get('/:id', pitchersCtrl.show);
router.post('/index', ensureLoggedIn, pitchersCtrl.create);
	
module.exports = router;