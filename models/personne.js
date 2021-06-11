exports.Personne = class {
    constructor(idPersonne, nomPersonne, prenomPersonne, emailPersonne, mdpPersonne, typePersonne) {
        this.idPersonne = idPersonne;
        this.nomPersonne = nomPersonne;
        this.prenomPersonne = prenomPersonne;
        this.emailPersonne = emailPersonne;
        this.mdpPersonne = mdpPersonne;
        this.typePersonne = typePersonne;
    }
}