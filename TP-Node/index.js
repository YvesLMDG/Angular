console.log('** Administration Collegues **');

const vue = require('./vue.js');
const service = require('./service.js');

menu = new vue.Menu("Choisir une action :");
menu.ajouterOption("Lister les collègues");
menu.ajouterOption("Ajouter un collègue");
menu.afficher();
