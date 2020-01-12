export default class StarWars {
    constructor() {
        this.url = 'https://swapi.co/api/people/';
    }

    async getCharacters(maxCharacters) {
        const response = await fetch(`${this.url}${maxCharacters}`);

        const json = await response.json();

        return json;
    }
}