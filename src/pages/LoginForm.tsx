import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: () => void;
  isLoggedIn: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) {
      onLogin(); // Call the onLogin function
      // Redirect to the home page after successful login
      window.location.href = '/home';
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>   
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>  
        <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;