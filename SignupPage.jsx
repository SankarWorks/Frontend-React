import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupPage.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users'); 
     
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        navigate('/Product'); 
      } else {
        setError('Invalid email or password.'); 
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
      setError('An error occurred. Please try again later.'); 
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='logbtn'>Log In</button>
        {error && <p className="error-message">{error}</p>} 
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/Signin">Sign Up</Link>
      </p>
    </div>
  );
}
