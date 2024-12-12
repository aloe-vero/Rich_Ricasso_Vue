export default class Utilisateur {
  constructor(id, data) {
    this.id = id;
    this.nom = data.nom;
    this.prenom = data.prenom;
    this.password = data.password;
    this.courriel = data.courriel;
    this.autorisation = data.autorisation;
  }
}
