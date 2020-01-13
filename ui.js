export default class UI {
  constructor() {
    this.profile = document.getElementById('characters');
    this.loading = document.getElementById('loading');
    this.loading.classList.toggle('show');
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

  clearLoading(){
    if(this.profile.hasChildNodes()){
      this.loading.classList.toggle('no-show');
    }
  }
};