import axios from 'axios';

export default async function loginUser(usernameOrEmail, password) {
  try {
    const response = await axios.post('http://localhost:4000/auth/login', {
      usernameOrEmail,
      password,
    });

    if (response.data && response.data.token) {
      const token = response.data.token;
      return token;
    } else {
      throw new Error('El servidor no devolvió un token de autenticación.');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
}
