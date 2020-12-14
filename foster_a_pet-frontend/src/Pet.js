class Pet {
  constructor(id, name, breed, age, location){
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.location = location
  } 
  //render pet instance method
  static getAll() {
    api.getAllPets().then((data) =>
        data.forEach((pet) => new Pet(pet))
    );
}

  render() {
    const pet = document.createElement("div");
    pet.className = "pet";
    pet.dataset.id = this.pet.id;
    this.pet = pet;
    this.renderInnerHTML();
    this.constructor.container.append(pet);
}
  
 /*  renderPets() {
    let petsDiv = document.getElementById("pets-container")
    petsDiv.innerHTML += `<ul> <li> Name: ${this.name} Breed: ${this.breed} Age: ${this.age} Location: ${this.location.name}</li> </ul> 
    <button class="delete-bttn" data-id="${this.id}" onclick="deletePet()" > Delete Pet! </button>`
    } */

    renderInnerHTML() {
      const { name, breed, age, location } = this.pet;
      this.card.innerHTML = `
          <h2>${name}</h2>
         <p>${breed} class="toy-avatar" <p/>
          <p>${age} Likes </p>
          <p>${location}</p>
          <button class="delete">Delete Pet/button>
      `;
  }

   deletePet() {
      let petId = parseInt(event.target.dataset.id)
      
      fetch(`${BACKEND_URL}/pets/${petId}`, {
        method: 'DELETE'
      })
      //debugger
      this.location.reload()
    }
  }