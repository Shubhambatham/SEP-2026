import React, { useState, useEffect } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('idle'); // 'idle', 'loading', 'success', 'failed'
  const [errorMessage, setErrorMessage] = useState('');

  // 1. MOUNTING & UNMOUNTING
  useEffect(() => {
    console.log('Login Page loaded. Ready for user input.');
    
    return () => {
      console.log('Login Page closed. Clearing sensitive memory.');
    };
  }, []); // Empty array ensures this only runs on mount and unmount

  // 2. UPDATING: Watches for the 'failed' status to force a logout/reset
  useEffect(() => {
    if (loginStatus === 'failed') {
      console.warn('Login failed! Component lifecycle triggering automatic reset/logout.');

      // Act as a "forced logout" by wiping credentials after a brief delay
      const timer = setTimeout(() => {
        setUsername('');
        setPassword('');
        setLoginStatus('idle');
        console.log(' State cleared. Form reset completed safely.');
      }, 2000);

      // Clean up the timer if the component unmounts mid-execution
      return () => clearTimeout(timer);
    }
  }, [loginStatus]); // This effect ONLY runs when 'loginStatus' changes
  var loginCount = 0;
  // Simulated login function
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginStatus('loading');
    setErrorMessage('');

    // Simulating an API call
    setTimeout(() => {
      // Hardcoded dummy check for demonstration
      if (username === 'admin' && password === 'secret123') {
        setLoginStatus('success');
        alert('Login Successful!');
      } else {
        loginCount++;
        setLoginStatus('failed');
        if(loginCount > 2) {
          setErrorMessage('Too many failed attempts. Please try again later.');
          return;
        }
        // Triggering the failure state
        setErrorMessage('Invalid username or password.');
      }
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Login</h2>
      
      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>
          {errorMessage} {loginStatus === 'failed' && "(Resetting form...)"}
        </div>
      )}

      <form onSubmit={handleLoginSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            disabled={loginStatus === 'loading' || loginStatus === 'failed'}
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            disabled={loginStatus === 'loading' || loginStatus === 'failed'}
            required 
          />
        </div>
        <button type="submit" disabled={loginStatus === 'loading' || loginStatus === 'failed'}>
          {loginStatus === 'loading' ? 'Verifying...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
