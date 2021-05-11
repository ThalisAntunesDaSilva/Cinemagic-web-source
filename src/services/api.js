import axios from 'axios';

const api = axios.create({

    baseURL: 'https://cinemagic-grupo04.herokuapp.com/',


})

export default api;