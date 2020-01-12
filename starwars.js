export default class StarWars {
    constructor() {
        this.url = 'https://swapi.co/api/';
    }

    async getCharacters(maxCharacters) {
        const response = await fetch(`${this.url}${maxCharacters}`);

        const json = await response.json();

        return json;
    }
}