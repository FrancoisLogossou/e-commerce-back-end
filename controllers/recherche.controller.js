const rechercheDao = require('../dao/recherche.dao');

exports.getArticlesBySearch = (req, res, next) => {
    const param = req.params.param1
    rechercheDao.getArticlesBySearch(param)
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `aucun élément trouvé: ${err}`
            })
        });
}