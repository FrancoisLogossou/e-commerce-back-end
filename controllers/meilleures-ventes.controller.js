const meilleuresVentesDao= require('../dao/meilleures-ventes.dao');

exports.getMeilleuresVentes = (req, res, next) => {
    meilleuresVentesDao.getMeilleuresVentes()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}
