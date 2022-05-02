import axios from "axios";

const initialURL = 'https://pokeapi.co/api/v2/pokemon/'

export const requestAxiosPokemon = () => {
    return axios({
      method: 'GET',
      url: `${initialURL}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
     
    })
      .then((response) => {
        return response.data
      })
      .catch(error => {
        throw error.response?.data
      });
  }
  