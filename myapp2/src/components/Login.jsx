import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "secret123") {
        alert("Login successful! Redirecting to menu in 2 seconds...");
        setTimeout(() => {
        navigate("/menu");
        }, 2000);

    } else {
        navigate("/login-failed");
        alert("Invalid credentials! redirecting to login page in 2 seconds...");
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }
};
return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '100px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit" style={{ marginTop: '20px' }}>Login</button>
            </div>
        </form>
</div>
);
}
