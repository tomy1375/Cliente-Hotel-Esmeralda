
import axios from 'axios';

export default async function registerUser(username, email, password) { 
 try {
    const response = await axios.post('http://localhost:4000/auth/register', {
      username,
      email,
      password,
    });
    return response.data; 
 } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error; 
 }
};
