export default class Produit {
  constructor(id, data) {
    this.id = id;
    this.type = data.type;
    this.nom = data.nom;
    this.image = data.image;
    this.description = data.description;
    this.prix = data.prix;
    this.couleur = data.couleur;
    this.taille = data.taille;
  }
}
