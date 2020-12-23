class LocationForm {
  static container = document.querySelector(".lcontainer");
  constructor() {
      this.render();
      this.attachEventLister();
  }

  attachEventLister() {
      this.form.addEventListener("submit", this.handleOnSubmit);
      
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { name, phonenumber } = event.target;
    const data = {
          name: name.value,
          phonenumber: phonenumber.value,

      };
      //console.log(data);
      api.createLocation(data).then((location) => new Location(location));  

    };

  render() {
      const form = document.createElement("form");
      form.className = "add-location";
      form.innerHTML = this.renderInnerHTML();
      this.form = form;
      this.constructor.container.append(form);
  }

  renderInnerHTML = () => {
      return `
      <h3>Create a new location!</h3>
      <input
          id="name"
          type="text"
          name="name"
          value=""
          placeholder="Enter a location's name..."
          class="input-text"
      />
      <br />
      <input
          id="phonenumber"
          type="text"
          name="phonenumber"
          value=""
          placeholder="Enter a phone number"
          class="input-text"
      />
  
      <br />
      <input
          type="submit"
          name="submit"
          value="Create New Location"
          class="submit"
          id="submit"
      />
      `;
  };
}

