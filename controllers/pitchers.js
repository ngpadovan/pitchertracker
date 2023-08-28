const Pitcher = require('../models/pitcher');

module.exports = {
    index,
    new: newPitcher
  };

async function index(req, res) {
  const pitchers = await Pitcher.find({});
  res.render('pitchers/index', { title: 'My Pitchers', pitchers });
}

function newPitcher(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('pitchers/new', { title: 'Add pitcher', errorMsg: '' });
}