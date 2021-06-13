const express = require('express');
const app = express();
const home = require('./routes/home.route');
const recherche = require('./routes/recherche.route');
const user = require('./routes/user.route');
const commande = require('./routes/commande.route');
const commandeList = require('./routes/commande-list.route');
const adresse = require('./routes/adresse.route');
const connexion = require('./routes/connexion.route');
const detailArticle = require('./routes/detail-article.route');
const nouveautes = require('./routes/nouveautes.route');
const meilleuresVentes = require('./routes/meilleures-ventes.route');
const genreFormation = require('./routes/genre-formation.route');
const voirOffres = require('./routes/voir-offres.route');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(express.json());


app.use('/home', home);
app.use('/voir-offres', voirOffres);
app.use('/meilleures-ventes', meilleuresVentes);
app.use('/genre-formation', genreFormation);
app.use('/nouveautes', nouveautes);
app.use('/commande', commande);
app.use('/commandeList', commandeList);
app.use('/detailarticle', detailArticle);
app.use('/recherche', recherche);
app.use('/connexion', connexion);
app.use('/user', user);
app.use('/adresse', adresse);
app.all('/*', (req, res) => {
    res
        .status(404)
        .send('Not Found');
});
app.listen(3000, () => console.log('Adresse du serveur : http://localhost:3000')
);