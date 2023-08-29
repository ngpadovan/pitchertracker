const express = require('express');
const router = express.Router();
const pitchersCtrl = require('../controllers/pitchers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	

router.get('/index', pitchersCtrl.index);
router.get('/new', ensureLoggedIn, pitchersCtrl.new);
router.get('/:id', pitchersCtrl.show);
router.post('/index', ensureLoggedIn, pitchersCtrl.create);
router.get('/:id/editdelete', ensureLoggedIn, pitchersCtrl.edit);
router.put('/:id', ensureLoggedIn, pitchersCtrl.update);

module.exports = router;