//login/loginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password }, {
        withCredentials: true // important si token httpOnly
      });
      alert('Connexion réussie');
      onLogin(); // informe App que l'utilisateur est connecté
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      setError('Email ou mot de passe incorrect');
    }
  };
 const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, ajoute ta logique de connexion
    onLogin();
  };

 return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Vérifier</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;