import axios from 'axios'; 

const api = axios.create({
    // Utilizando emulador, localhost mudar para localhost:3333 ou 10.0.2.2:3333
    baseURL: 'http://192.168.1.8:3333',
});

export default api;