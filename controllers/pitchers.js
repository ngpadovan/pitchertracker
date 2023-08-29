const Pitcher = require('../models/pitcher');
const GameLog = require('../models/gamelog');

module.exports = {
    index,
    new: newPitcher,
    create,
    show,
    edit,
    update
  };

  async function edit(req, res) {
    try {
      const pitcher = await Pitcher.findById(req.params.id);
      res.render('pitchers/editdelete', { title: 'Edit Pitcher', pitcher });
    } catch (err) {
      console.log(err);
    }
  }

async function index(req, res) {
  const pitchers = await Pitcher.find({});
  res.render('pitchers/index', { title: 'My Pitchers', pitchers });
}

function newPitcher(req, res) {
  res.render('pitchers/new', { title: 'Add pitcher', errorMsg: '' });
}

async function show(req, res) {
  const pitcher = await Pitcher.findById(req.params.id);
  const gameLog = await GameLog.find({pitcher: pitcher._id})
  res.render('pitchers/show', { title: 'Pitcher Details', pitcher, gameLog });

}

async function create(req, res) {
  try {
    const pitcher = new Pitcher(req.body);
    pitcher.userId = req.user._id; 
    for (let key in pitcher) {
      if (pitcher[key] === '') {
        delete pitcher[key];
      }
    } await pitcher.save();
    res.redirect(`/pitchers/index`);
  } catch (err) {
    console.log(err);
    res.redirect('/pitchers/new');
  }
}

async function update(req, res) {
  try {
    const pitcher = await Pitcher.findById(req.params.id);
    for (let key in req.body) {
      if (req.body[key] !== '') {
        pitcher[key] = req.body[key];
      }
    }
    await pitcher.save();
    res.redirect(`/pitchers/${pitcher._id}`);
  } catch (err) {
    console.log(err);
  }
}
