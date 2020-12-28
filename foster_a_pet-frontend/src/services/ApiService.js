class ApiService {
  constructor(baseURL) {
      this.baseURL = baseURL;
  }


  getAllPets = () => fetch(`${this.baseURL}/pets`).then((res) => res.json());

  getAllLocations = () => fetch(`${this.baseURL}/locations`).then((res) => res.json());

  deletePet = (data) => {
      const config = {
        method: 'DELETE',
    }
    fetch(`${this.baseURL}/pets/${data}`, config);
    
  }

        
  createPet = (data) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    };
    return fetch(`${this.baseURL}/pets`, config).then((res) => res.json());
  }

    createLocation = (data) => {
      const config = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify(data),
      };
      return fetch(`${this.baseURL}/locations`, config).then((res) => res.json());
      
    
    
};
}