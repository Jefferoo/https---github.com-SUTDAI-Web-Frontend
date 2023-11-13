import React, { useState } from
 
'react';
import { BrowserRouter as Router, Route, Routes } from
 
'react-router-dom';
import LoginForm from './pages/LoginForm';
import HomePage from './pages/Home';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true); // Simulate successful login
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <LoginForm onLogin={onLogin} isLoggedIn={isLoggedIn}/>}
        />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
