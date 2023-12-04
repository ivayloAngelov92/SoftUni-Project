import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { login, register, logout } from './services/authService';
import AuthContext from './contexts/authContext';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Hot from './components/Catalog/Hot';
import Juice from './components/Catalog/Juice';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Iced from './components/Catalog/Iced';
import Details from './components/Details/Details';

function App() {
  const navigate= useNavigate()
  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');
  });

  const loginSubmitHandler =async (values) => {
    const result= await login(values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate('/')
  };

  const registerSubmitHandler = async (values) => {
    
    const result= await register(values.username, values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate('/')
  }
  const logoutHandler = ()=>{
    setAuth({})
    localStorage.removeItem('accessToken')
    navigate('/')
  }

  const values={
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username:auth.username,
    email:auth.email,
    isAuthenticated: !!auth.accessToken,
    
    }
  return (
    <AuthContext.Provider value={values}>
    <div className="tm-container">
      <div className="tm-row">
        <Header />
        <div className="tm-right">
          <main className="tm-main">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/drinks/iced" element={<Iced />} />
              <Route path="/drinks/hot" element={<Hot />} />
              <Route path="/drinks/juice" element={<Juice />} />
              <Route path="/login"element={<Login />}/>
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<Create />} />
              <Route path="/drinks/:drinkId" element={<Details />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
