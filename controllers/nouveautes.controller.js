const nouveautesDao = require('../dao/nouveautes.dao');

exports.getNouveautes = (req, res, next) => {
    nouveautesDao.getNouveautes()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}