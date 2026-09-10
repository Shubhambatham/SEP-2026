// https://jsonplaceholder.typicode.com/users

import React, { useState } from 'react';

 export default function FetchUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // const response = await fetch('/api/users/1');
      const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
      
      if (!response.ok) throw new Error('User not found');
      
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Load User</button>
      
      {loading && <p> Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {user && <p> User: {user.name}</p>}
    </div>
  );
}
// https://jsonplaceholder.typicode.com/users/1