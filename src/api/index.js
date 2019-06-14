import Axios from "axios";

export async function fetchPokemon(id) {
  return Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response =>
    Promise.resolve(response.data)
  );
}
