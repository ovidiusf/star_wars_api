import StarWars from './starwars.js';
import UI from './ui.js';
// INIT Starwars
const starwars = new StarWars;
const ui = new UI;

function display(){
    let numberOfCharacters = 10;
    for(let i=1; i < numberOfCharacters; i++){
        starwars.getCharacters(i).then(data => ui.showProfile(data));
    }
}

display();




