exports.Article = class {
    constructor(refArticle, titreArticle, resumeArticle, puHT, image, qteStock) {
        this.refArticle    = refArticle;
        this.titreArticle  = titreArticle;
        this.resumeArticle = resumeArticle;
        this.puHT          = puHT;
        this.image         = image;
        this.qteStock      = qteStock;
    }
}