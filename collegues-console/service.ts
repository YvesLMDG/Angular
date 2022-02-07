import fetch from 'node-fetch';
import { Person } from './Person';
export default class Service {
    
    async getCollegues() { // Promise<Tableau>
        const response = await fetch(
            'https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
        return <Promise<Person[]>> await response.json();
    }
    
}