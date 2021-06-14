const voirOffresDao = require('../dao/voir-offres.dao');

exports.getAllByOptions = async (req, res, next) => {
    const option = req.params.option;
    if (option == 'meilleures ventes') {
        voirOffresDao.getAllMeilleuresVentes()
            .then(result => res.status(200).json(result))
            .catch(err => {
                return res.status(500).json({
                    error: `problème de récupération de donnees: ${err}`
                })
            });
    } else  if (option == 'nouveautés') {
        voirOffresDao.getAllNouveautes()
            .then(result => res.status(200).json(result))
            .catch(err => {
                return res.status(500).json({
                    error: `problème de récupération de donnees: ${err}`
                })
            });
    } else  if (option == 'formation(s)') {
        voirOffresDao.getAllGenreFormation()
            .then(result => res.status(200).json(result))
            .catch(err => {
                return res.status(500).json({
                    error: `problème de récupération de donnees: ${err}`
                })
            });
    } 
}