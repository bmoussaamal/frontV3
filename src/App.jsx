import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/loginForm.jsx';
import Home from './components/home/Home.jsx';
import Dashboard from './pages/Dashboard.js';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );


}
//function App() {
  //return <h1>Hello React fonctionne ✅</h1>;
//}

export default App;
