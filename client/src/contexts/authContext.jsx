import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState('auth', {});

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      if(values.password!= values.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      const result = await authService.register(
        values.username,
        values.email,
        values.password,
      );
  
      setAuth(result);
  
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
    
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');

  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    liked:[],
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
