import { useState } from 'react';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    
    if (!email.trim() || !password.trim()) {
      alert('Error: Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      alert('Error: El password debe tener al menos 6 caracteres.');
      return;
    }

  
    alert('Authentication successful!');
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
