import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Solicitar el token
      const response = await axios.post('/api/token', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      // Obtenemos los datos del usuario
      const userResponse = await axios.get('/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = userResponse.data;
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/home/profile');
    } catch (error) {
      console.error('Error en la autenticación:', error);
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="academy-title">Academy</h1>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="card-form">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="card-form button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
