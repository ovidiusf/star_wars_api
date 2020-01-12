import StarWars from './starwars.js';
import UI from './ui.js';
// INIT Starwars
const starwars = new StarWars;
const ui = new UI;

async function display(){
    await console.log(starwars.getCharacters(2).then(data => ui.showProfile(data)));
}

display();




