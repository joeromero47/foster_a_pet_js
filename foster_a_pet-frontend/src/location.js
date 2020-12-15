class Location {
  constructor(id, name, phonenumber){
    this.id = id;
    this.name = name;
    this.phonenumber = phonenumber;
  } 

  static getAll() {
    api.getAllLocations().then((data) =>
        data.forEach((location) => new Location(location))
    );
}
  renderLocations() {
    let locationsDiv = document.getElementById("locations-container")
    locationsDiv.innerHTML += `<ul> <li> Name: ${this.name} Breed: ${this.phonenumber} </li> </ul> `
    }
  }