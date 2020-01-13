import StarWars from './starwars.js';
import UI from './ui.js';

// INIT Starwars
const starwars = new StarWars;
// init ui
const ui = new UI;

// display functions which gets the characters from the api and displays them using the ui function showProfile
function display(){
    let numberOfCharacters = 10;
    for(let i=1; i < numberOfCharacters; i++){
        starwars.getCharacters(i).then(data => ui.showProfile(data));
    };
    ui.clearLoading();
}

display();




