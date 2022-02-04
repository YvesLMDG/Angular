class Option {
    constructor(libelle){
        this.libelle=libelle;
    }
}

class Menu {
    constructor(libelleChoix){
        this.libelleChoix = libelleChoix;
        this.options = [];
    }

    afficher(){
        console.log(this.libelleChoix);
        for(let i = 0; i<this.options.length; i++){
            console.log(i + ". " + this.options[i].libelle);
        }
    }

    ajouterOption(libelle){
        this.options.push(new Option(libelle));
    }
}

exports.Menu = Menu;

