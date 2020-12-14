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
      const { name, breed, age, location } = event.target;
      const data = {
          name: name.value,
          breed: breed.value,
          age: age.value,
          location: location.value,

      };
      api.createPet(data).then((Pet) => new Pet(pet));
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
      <h3>Create a toy!</h3>
      <input
          type="text"
          name="name"
          value=""
          placeholder="Enter a pet's name..."
          class="input-text"
      />
      <br />
      <input
          type="text"
          name="breed"
          value=""
          placeholder="Enter a pet's breed..."
          class="input-text"
      />
      <br />
      <input
          type="text"
          name="age"
          value=""
          placeholder="Enter a pet's age.."
          class="input-text"
      />
      <br />
      <select id="location-select">
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
      />
      `;
  };
}

