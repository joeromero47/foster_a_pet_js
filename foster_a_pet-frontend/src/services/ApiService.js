class ApiService {
  constructor(baseURL) {
      this.baseURL = baseURL;
  }


  getAllPets = () => fetch(`${this.baseURL}/pets`).then((res) => res.json());
}