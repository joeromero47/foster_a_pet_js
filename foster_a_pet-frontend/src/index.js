const api = new ApiService("http://localhost:3000/api/v1");

document.addEventListener("DOMContentLoaded", () => {
  
  fetchPets();
  fetchLocations();
  createForm();
})

// const BACKEND_URL = "http://localhost:3000";

/* function fetchPets()  {
  fetch(BACKEND_URL + "/pets")
    .then(resp => resp.json())
    .then(pets => {
      //doing something with data fetched
      //console.log(pets)
      for (const pet of pets){
        let p = new Pet(pet.id, pet.name, pet.breed, pet.age, pet.locationid)
        p.renderPets();
      }
    })
}
 */
function fetchLocations()  {
  fetch(BACKEND_URL + "/locations")
    .then(resp => resp.json())
    .then(locations => {
      //doing something with data fetched
      //console.log(locations)
      for (const location of locations){
        let p = new Location(location.id, location.name, location.phonenumber)
        p.renderLocations();
      }
    })
}

//classes
//read-fetch pets index
/* class Pet {
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
  } */

  //create a new pet - create form, add event 
  //listener 
  //once form submitted, make fetch post request
  //do something with returned object
/* 
  function createForm(){
    let petFormDiv = document.getElementById("create-pet-form")
    petFormDiv.innerHTML += 
    `
    <form>
    Name: <input type="text" id="name"><br>
    Breed: <input type="text" id="breed"><br>
    Age: <input type="integer" id="age"><br>
    <p>Select a location:</p>

    <select id="location-select">
        <option value="0">--Please choose an option--</option>
        <option value="1">Animal Foundation</option>
        <option value="2">Lied</option>
        <option value="3">Henderson Animal Shelter</option>
    </select>
    <input type="submit" value="Create Pet">
    </form>
    `
    petFormDiv.addEventListener("submit", petFormSubmission)
    //debugger
  }*/
//responsible for listening for form submission
/*   function petFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value 
    let breed = document.getElementById("breed").value
    let age = document.getElementById("age").value 
    let location_id = document.getElementById("location-select").value
    //debugger
    let pet = {
      name: name,
      breed: breed,
      age: age,
      location_id: location_id,

    }
    debugger

    fetch(`${BACKEND_URL}/pets`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pet)
    })
      .then(resp => resp.json())
      .then(pet => {
        let p = new Pet(pet.id, pet.name, pet.breed, pet.age, pet.location)
        p.renderPets();
      })
  } */
  //pets - delete

/*   function deletePet(){
    
    let petId = parseInt(event.target.dataset.id)
    
    fetch(`${BACKEND_URL}/pets/${petId}`, {
      method: 'DELETE'
    })
    //debugger
    this.location.reload()
  } */

  // Location class

/*   class Location {
    constructor(id, name, phonenumber){
      this.id = id;
      this.name = name;
      this.phonenumber = phonenumber;
    } 

    renderLocations() {
      let locationsDiv = document.getElementById("locations-container")
      locationsDiv.innerHTML += `<ul> <li> Name: ${this.name} Breed: ${this.phonenumber} </li> </ul> `
      }
    } */