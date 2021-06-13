const genreFormationDao = require('../dao/genre-formation.dao');

exports.getGenreFormation = (req, res, next) => {
    genreFormationDao.getGenreFormation()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}
