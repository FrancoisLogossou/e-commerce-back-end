exports.Personne = class {
    constructor(idPersonne, nomPersonne, prenomPersonne, emailPersonne, mdpPersonne, adressePersonne, typePersonne) {
        this.idPersonne = idPersonne;
        this.nomPersonne = nomPersonne;
        this.prenomPersonne = prenomPersonne;
        this.emailPersonne = emailPersonne;
        this.mdpPersonne = mdpPersonne;
        this.adressePersonne = adressePersonne;
        this.typePersonne = typePersonne;
    }
}