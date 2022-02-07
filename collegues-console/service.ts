import fetch, { Response } from 'node-fetch';
import { Person } from './Person';
export default class Service {
    
    async getCollegues() { // Promise<Tableau>
        const response = await fetch(
            'https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
        return <Promise<Person[]>> await response.json();
    }

    async putCollegue(collegue:Person){
        console.log(collegue);
        const response = await fetch('https://formation-angular-collegues.herokuapp.com/api/v1/collegues', 
        {method: 'POST', 
        body: JSON.stringify(collegue),
        headers: {'Content-Type': 'application/json'}});
        return  await response.text();
    }
}