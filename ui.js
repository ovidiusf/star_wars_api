export default class UI {
  constructor() {
    this.profile = document.getElementById('characters');
  };

  // create the profile of the user using bootstrap classes and dom manipulation
  showProfile(character) {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = `
      <div class="card p-2 bd-highlight m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">${character.name} with height ${character.height} and birth year ${character.birth_year}.</p>
        </div>
      </div>
        `;
    this.profile.appendChild(myDiv);
  };
};