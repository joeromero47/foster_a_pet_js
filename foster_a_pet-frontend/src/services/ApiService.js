class ApiService {
  constructor(baseURL) {
      this.baseURL = baseURL;
  }


  getAllPets = () => fetch(`${this.baseURL}/pets`).then((res) => res.json());

  getAllLocations = () => fetch(`${this.baseURL}/locations`).then((res) => res.json());

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

    
    
    
};
}