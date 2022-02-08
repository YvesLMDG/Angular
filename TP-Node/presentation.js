const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

class Option {
    constructor(libelle, contenu) {
        this.libelle = libelle;
        this.contenu = contenu;
    }

    getContenu() {
        return this.contenu;
    }

    afficher() {
        console.log(this.contenu);
    }
}

class Menu {
    constructor(libelleChoix, libelleSortie) {
        this.libelleChoix = libelleChoix;
        this.options = [];
        this.optionSortie = new Option(libelleSortie, '');
        this.libelleSortie = libelleSortie;
    }

    getLibelleChoix() {
        return this.libelleChoix;
    }

    getOptions() {
        let resultat = "";
        for (let i = 0; i < this.options.length; i++) {
            resultat += (i + 1) + ". " + this.options[i].libelle + "\n";
        }
        return resultat;
    }

    afficherOptions() {
        console.log(this.libelleChoix);
        for (let i = 0; i < this.options.length; i++) {
            console.log((i + 1) + ". " + this.options[i].libelle);
        }
        console.log("99. " + this.libelleSortie);
    }


    getOption(numOption) {
        return this.options[numOption - 1];
    }

    afficherOption(numOption) {
        console.log(this.options[numOption - 1]);
    }

    ajouterOption(libelle, contenu) {
        this.options.push(new Option(libelle, contenu));
    }
}


class Presentation {
    constructor() {
        this.menu = new Menu("Choisir une action :", "Sortir");
        this.menu.ajouterOption("Lister les collègues", "Liste des clients");
        const rl = readline.createInterface({ input, output });
        this.readline = rl;
        //menu.ajouterOption("Ajouter un collègue");
    }

    demarrer() {
        console.log('** Administration Collegues **');
        console.log(this.menu.getLibelleChoix());
        console.log(this.menu.getOptions());


        this.readline.question(this.menu.getOptions(), (answer) => {
            console.log(this.menu.getOption(`${answer}`).getContenu());
            this.readline.close();
        });
    }
}

exports.Presentation = Presentation;

