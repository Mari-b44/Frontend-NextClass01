import axios from 'axios';

// Creamos una instancia básica
const client = axios.create({
    baseURL: "http://localhost:3000/api", // La URL base de tu backend
    withCredentials: true // Ayuda con cookies/cors en algunos navegadores
});

// INTERCEPTOR (El Truco de Magia ✨)
// Antes de que salga cualquier petición, le inyectamos el Token si existe.
client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default client;