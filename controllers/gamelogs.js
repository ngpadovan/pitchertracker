const GameLog = require('../models/gamelog')
const Pitcher = require('../models/pitcher')

module.exports = {
    new: newGameLog,
    create
}


async function newGameLog(req, res) {
    const pitcher = await Pitcher.findById(req.params.id)
    res.render('pitchers/:id', { pitcher })
}

async function create(req, res) {
    try {
        req.body.pitcher = req.params.id
        console.log(req.body)
        await GameLog.create(req.body)
        res.redirect(`/pitchers/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.redirect(`/ptchers/${req.params.id}`)    }
}

