import { useState } from 'react';

const RegisterPage = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Error: Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      alert('Error: El password debe tener al menos 6 caracteres.');
      return;
    }

   
    if (password !== confirmPassword) {
      alert('Error: El password y la confirmación del password deben ser iguales.');
      return;
    }

    
    alert('¡Registro exitoso! Cuenta creada correctamente.');
    
    
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
