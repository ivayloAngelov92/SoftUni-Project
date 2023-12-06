import { useContext, useEffect } from 'react';
import { logout } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);
  useEffect(() => {
    logout()
      .then(() => {
        logoutHandler();
        navigate('/');
      })
      .catch(() => {
        logoutHandler();
        navigate('/');
      });
  });
  return null;
}
