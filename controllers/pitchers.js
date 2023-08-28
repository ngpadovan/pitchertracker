const Pitcher = require('../models/pitcher');

module.exports = {
    index,
    new: newPitcher,
    create
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

async function create(req, res) {
  try {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    await Pitcher.create(req.body);
    res.redirect('/pitchers/index');
} catch (error) {
    // Handle errors here, e.g., validation errors or database errors
    console.error('Error:', error);
    res.status(500).send('An error occurred');
}
};