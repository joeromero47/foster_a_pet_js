class Location {
  constructor(id, name, phonenumber){
    this.id = id;
    this.name = name;
    this.phonenumber = phonenumber;
  } 

  fetchLocations()  {
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

  renderLocations() {
    let locationsDiv = document.getElementById("locations-container")
    locationsDiv.innerHTML += `<ul> <li> Name: ${this.name} Breed: ${this.phonenumber} </li> </ul> `
    }
  }