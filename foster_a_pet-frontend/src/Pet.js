class Pet {
  static container = document.getElementById("pets-container");
  
  constructor(pet){
    this.pet = pet;
    this.render();
    //this.attachEventLister();
    
  } 
 
  static getAll() {
    api.getAllPets().then((data) => data.forEach((pet) => new Pet(pet))
    );
    
    
  }

   //attachEventListener() {
    //this.pet.addEventListener("click", this.deletePet());
  //} 

  render() {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = this.pet.id;
    this.card = card;
    this.renderInnerHTML();
    this.constructor.container.append(card);
    //debugger
  }
  

    renderInnerHTML() {
      const { id, name, breed, age, location_id, location } = this.pet;
      //debugger
      this.card.innerHTML = `
          <h2>Name:${this.pet.name}</h2>
         <p>Breed: ${this.pet.breed} 
          Age: ${this.pet.age} 
          location: ${this.pet.location.name}
          
          <button class="delete-bttn" id="delete" value="delete" data-id="${this.pet.id}" onclick="Pet.deletePet(this)" > Delete Pet! </button>
      `;
      }
    
      static deletePet(){
        let petId = parseInt(event.target.dataset.id);
        api.deletePet(petId);

        location.reload();
      }
    }

