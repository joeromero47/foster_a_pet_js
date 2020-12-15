class PetForm {
  static container = document.querySelector(".container");
  constructor() {
      this.render();
      this.attachEventLister();
  }

  attachEventLister() {
      this.form.addEventListener("submit", this.handleOnSubmit);
  }

  handleOnSubmit = (event) => {
  
    event.preventDefault();
    const { name, breed, age, location_id } = event.target;
    const data = {
          name: name.value,
          breed: breed.value,
          age: age.value,
          location_id: location_id.value,

      };
      //console.log(data);
      api.createPet(data).then((pet) => new Pet(pet));  

    };

  render() {
      const form = document.createElement("form");
      form.className = "add-dog";
      form.innerHTML = this.renderInnerHTML();
      this.form = form;
      this.constructor.container.append(form);
  }

  renderInnerHTML = () => {
      return `
      <h3>Create a Pet!</h3>
      <input
          id="name"
          type="text"
          name="name"
          value=""
          placeholder="Enter a pet's name..."
          class="input-text"
      />
      <br />
      <input
          id="breed"
          type="text"
          name="breed"
          value=""
          placeholder="Enter a pet's breed..."
          class="input-text"
      />
      <br />
      <input
          id="age"
          type="text"
          name="age"
          value=""
          placeholder="Enter a pet's age.."
          class="input-text"
      />
      <br />
      <select id="location_id" name="location_id">
        <option value="0">--Please choose an option--</option>
        <option value="1">Animal Foundation</option>
        <option value="2">Lied</option>
        <option value="3">Henderson Animal Shelter</option>
      </select>
      <br />
      <input
          type="submit"
          name="submit"
          value="Create New Pet"
          class="submit"
          id="submit"
      />
      `;
  };
}

