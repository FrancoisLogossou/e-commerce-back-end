const detailArticleDao = require('../dao/detail-article.dao');
const livreAuteurDao = require("../dao/livre-auteur.dao");

exports.getOneArticleById = async (req, res, next) => {
    const id = parseInt(req.params.refArticle);
    let livres = await detailArticleDao.getOneArticleById(id).catch((err) => {
      return res.status(500).json({
        error: `Aucun article avec la référence ${id}`,
      });
    });

    let l = livres[0];
    console.log(l)
    l.auteurs = await livreAuteurDao.getAllAuteursOfLivre(l.numISBN)
      .catch((err) => {
        res.status(500).json({
          error: `problème de récupération d'adresses : ${err}`,
        });
      });
  
    res.status(200).json(l);
  };