class Location {
  static container = document.getElementById("locations-container");
  constructor(location){
    this.location = location;
    this.render();
  }

  static getAll() {
    api.getAllLocations().then((data) =>
        data.forEach((location) => new Location(location))
    );
    debugger
}

  render(){
    const agency = document.createElement("div");
    agency.className = "agency";
    agency.dataset.id = this.location.id;
    this.agency = agency;
    this.renderInnerHtml();
    this.constructor.container.append(agency);
    debugger
  }

  renderInnerHtml() {
    const { name, phonenumber } = this.location;
    //debugger
    this.agency.innerHTML = `
        <h2>Name:${this.location.name}</h2> <br>
       <p>Phone Number: ${this.location.phonenumber} 
        
      
    `;
  }
}