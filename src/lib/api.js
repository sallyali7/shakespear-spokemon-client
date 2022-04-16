import axios from 'axios'
const baseUrl = '/api'

export function getAllPokemon() {
  return axios.get(`${baseUrl}/pokemon`)
}
export function getIndividualPokemon(pokemonId) {
  return axios.get(`${baseUrl}/pokemon/${pokemonId}`)
}
console.log(getIndividualPokemon)