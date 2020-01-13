import StarWars from './starwars.js';
import UI from './ui.js';

// init ui
const ui = new UI;

// INIT Starwars
const starwars = new StarWars;


// display functions which gets the characters from the api and displays them using the ui function showProfile
function displayCharacters() {
    starwars.getCharacters().then(characters => {
        characters.forEach(character => {
            ui.showCharacters(character);
        });
        if (characters.length !== 0) {
            ui.clearLoading();
        }
    });

}

// display the planets, going through the received array
function displayPlanets() {
    starwars.getPlanets().then(planets => {
        planets.forEach(planet => {
            ui.showPlanets(planet);
        });
        if (planets.length !== 0) {
            ui.clearLoading();
        }
    });

}

ui.displayLoading();
displayCharacters();
displayPlanets();






