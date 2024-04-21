import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../components/login/Login';
import Cookies from 'js-cookie';

const LoginView = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);
  return token ? null : <LoginPage />;
}

export default LoginView;

