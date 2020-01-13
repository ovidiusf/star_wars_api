export default class StarWars {
    constructor() {
        this.url = 'https://swapi.co/api/people/';
    }

    async getCharacters(maxCharacters) {
        try{
            const response = await fetch(`${this.url}${maxCharacters}`);

            const json = await response.json();
    
            return json;
        }catch(error) {
            console.log("error", error);
        }
    }
}