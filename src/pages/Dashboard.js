import React, { useState } from 'react';

function Dashboard() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState(null);

  const checkIP = async () => {
    const token = localStorage.getItem('token'); // ou utilise cookie httpOnly si tu as modifié ça

    const res = await fetch('http://localhost:3001/api/ip/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ ip })
    });

    const data = await res.json();
    setResult(data.authorized ? "✅ IP autorisée" : "❌ IP non autorisée");
  };

  return (
    <div>
      <h2>Dashboard Admin - Vérification d'IP</h2>
      <input
        type="text"
        placeholder="Entrez une adresse IP"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button onClick={checkIP}>Vérifier</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Dashboard;
