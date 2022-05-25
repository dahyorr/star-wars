import axios from 'axios'

export const SwapiApi = axios.create({
  baseURL: 'https://swapi.dev/api/'
})