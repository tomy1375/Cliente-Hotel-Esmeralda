import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Register from '../components/register/Register';

const RegisterView = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return token ? null : <Register />;

}

export default RegisterView;
