const Pitcher = require('../models/pitcher');
const GameLog = require('../models/gamelog');

module.exports = {
    index,
    new: newPitcher,
    create,
    show
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

async function show(req, res) {
  const pitcher = await Pitcher.findById(req.params.id);
  const gameLog = await GameLog.find({pitcher: pitcher._id})
  res.render('pitchers/show', { title: 'Pitcher Details', pitcher, gameLog });

}

// async function create(req, res) {
//   try {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key];
//     }
//     await Pitcher.create(req.body);
//     res.redirect('/pitchers/index');
// } catch (error) {
//     // Handle errors here, e.g., validation errors or database errors
//     console.error('Error:', error);
//     res.status(500).send('An error occurred');
// }
// };

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
  } catch (error) {
    console.error('Error:', error);
    res.redirect('/pitchers/new');
  }
}