const url = "http://localhost:3000";

const API = {
  getAllSweets: () => {
    return fetch(`${url}/sweet`).then((response) => response.json());
  },
  addASweet: (sweetObj) => {
    return fetch(`${url}/sweet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sweetObj),
    }).then((response) => response.json());
  },
  deleteSweet: (id) => {
    return fetch(`${url}/sweet/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
  getAllSeasons: () => {
    return fetch(`${url}/seasons`).then((response) => response.json());
  },
  getAllTypes: () => {
    return fetch(`${url}/types`).then((response) => response.json());
  },
  getAllShapes: () => {
    return fetch(`${url}/shapes`).then((response) => response.json());
  },
};

export default API;
