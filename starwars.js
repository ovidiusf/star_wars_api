export default class StarWars {
    constructor() {
        this.urlCharacters = 'https://swapi.co/api/people/';
        this.urlPlanets = 'https://swapi.co/api/planets/';
    }

    async getCharacters(characterNumber) {
        try{
            const response = await fetch(`${this.urlCharacters}${characterNumber}`);

            const json = await response.json();
    
            return json;
        }catch(error) {
            console.log("error", error);
        }
    }

    async getPlanets(){
        try{
            const response = await fetch(`${this.urlPlanets}`);

            const json = await response.json();

            const results = await json.results;
    
            return results;
        }catch(error) {
            console.log("error", error);
        }
    }
}