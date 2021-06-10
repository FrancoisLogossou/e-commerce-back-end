const detailArticleDao = require('../dao/detail-article.dao');

exports.getOneArticleById = (req, res, next) => {
    const refArticle = req.params.refArticle;
    detailArticleDao.getOneArticleById(refArticle)
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}