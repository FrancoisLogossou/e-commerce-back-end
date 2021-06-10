const express = require('express');
const router = express.Router();
const detailArticleController = require('../controllers/detail-article.controller');

router.get('/:refArticle', detailArticleController.getOneArticleById);


module.exports = router;