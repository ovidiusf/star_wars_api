export default class UI {
    constructor() {
        this.profile = document.getElementById('characters');
    }

    // create the profile of the user using bootstrap classes and dom manipulation
    showProfile(character) {
        this.profile.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">${character.name} with height ${character.height}.</p>
        </div>
      </div>
        `;
    }
}