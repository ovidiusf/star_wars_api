export default class UI {
  constructor() {
    this.profile = document.getElementById('characters');
    this.planets = document.getElementById('planets');
    this.main = document.querySelector('#main');
    this.loading = this.displayLoading();
    this.main.appendChild(this.loading);
  };

  // create the profile of the user using bootstrap classes and dom manipulation
  showCharacters(character) {
    let newCharacterCard = this.createCard();
    newCharacterCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">${character.name} with height ${character.height} and birth year ${character.birth_year}.</p>
        </div>
        `;
    this.profile.appendChild(newCharacterCard);
  };

  showPlanets(planet) {
    let newPlanetCard = this.createCard();
    newPlanetCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${planet.name}</h5>
          <p class="card-text">${planet.name} with climate ${planet.temperate} and gravity ${planet.gravity}.</p>
        </div>
        `;
    this.planets.appendChild(newPlanetCard);
  };

  clearLoading() {
    if(!this.loading.classList.contains('no-show')){
      this.loading.classList.toggle('no-show');
    }
  }

  displayLoading() {
    let loading = document.createElement('h3');
    loading.id = 'loading';
    loading.classList.toggle('badge');
    loading.classList.toggle('badge-secondary');
    loading.innerHTML = 'Loading...';
    return loading;
  }

  createCard() {
    let newCard = document.createElement('article');
    newCard.classList.toggle('card');
    newCard.classList.toggle('p-2');
    newCard.classList.toggle('bd-highlight');
    newCard.classList.toggle('m-2');
    newCard.style.width = "18rem";
    return newCard;
  }
};