const homeDao = require('../dao/home.dao');

exports.getAll = (req, res, next) => {
    homeDao.getAll()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}
