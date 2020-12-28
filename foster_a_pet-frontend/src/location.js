class Location {
  static container = document.getElementById("locations-container");
  constructor(location){
    this.location = location;
    this.render();
    this.option();
    
  }

  static getAll() {
    api.getAllLocations().then((data) =>
        data.forEach((location) => new Location(location))
    );
    
}

  render(){
    const agency = document.createElement("div");
    agency.className = "agency";
    agency.dataset.id = this.location.id;
    this.agency = agency;
    this.renderInnerHtml();
    this.constructor.container.append(agency);
    
  }
  option(){
    /* const locationHtml = this.location;
    let mySelect = document.getElementsByName("location_id");
    locationHtml.innerHTML += ` 
    <option id="${this.location.id}" value="${this.location.name}">${this.location.name}</option> 
    `;
    debugger
    document.getElementsByName("location_id").insertad */
    var x = document.getElementById("location_id");
    var option = document.createElement("option");
    option.text = `${this.location.name}`;
    option.value = this.location.id;
    option.id = this.location.id;
    x.add(option, x[0]);
    
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