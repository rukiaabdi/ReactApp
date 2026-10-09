
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();

    const from = location.state?.from?.pathname || '/';

    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>

      <p>You must log in to access the Create Post page.</p>

      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;