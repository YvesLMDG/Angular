import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { Person } from './Person';
import Service from './service';
const rl = readline.createInterface({ input, output });

export default class Presentation {

    private service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    demarrer() {
        console.log('** Administration Collegues **');
        console.log("1. Lister les collègues");
        console.log("2. Créer un collègue");
        console.log("99. Sortir");

        rl.question('Que souhaitez-vous faire ? ', (answer) => {

            switch (answer) {
                case "1":
                    console.log(`>> Liste des collègues`);
                    // 1
                    this.service.getCollegues()
                        .then(tab => {
                            for (const col of tab) {
                                console.log(col.nom, col.prenom);
                            }
                            this.demarrer();
                        })
                        .catch(err => {
                            console.log('Ooppps', err);
                        });
                    break;
                case "2":
                    rl.question('prenom du collègue ? ', (answer) => {
                        const col: Person = { pseudo: '', prenom: '', nom: '' , photo: 'https://randomuser.me/api/portraits/men/70.jpg', score: 100};
                        col.prenom = answer;
                        col.pseudo = answer;
                        rl.question('nom du collègue ? ', (answer) => {
                            col.nom = answer;
                            this.service.putCollegue(col).then(resp => {
                                console.log(resp);
                                this.demarrer();
                                }
                            ).catch(err => {
                                console.log('Ooppps', err);
                            });
                        });
                    });
                    break;
                case "99":
                    console.log(`Au revoir`);
                    rl.close();
                    break;
                default:
                    console.log("Votre choix n'existe pas !");
                    this.demarrer();
                    break;
            }
        });
    }
}
