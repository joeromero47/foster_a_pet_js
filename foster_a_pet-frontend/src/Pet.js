class Pet {
  constructor(id, name, breed, age, location){
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.location = location
  } 
  //render pet instance method
  
  renderPets() {
    let petsDiv = document.getElementById("pets-container")
    petsDiv.innerHTML += `<ul> <li> Name: ${this.name} Breed: ${this.breed} Age: ${this.age} Location: ${this.location.name}</li> </ul> 
    <button class="delete-bttn" data-id="${this.id}" onclick="deletePet()" > Delete Pet! </button>`
    }
  }