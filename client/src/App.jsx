import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { login, register, logout } from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Hot from './components/Catalog/Hot';
import Juice from './components/Catalog/Juice';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Register from './components/Register/Register';
import Iced from './components/Catalog/Iced';
import Details from './components/Details/Details';

function App() {
  const navigate= useNavigate()
  const [auth, setAuth] = useState({});
  const loginSubmitHandler =async (values) => {
    const result= await login(values.email, values.password)

    setAuth(result)


    navigate(Path.Catalog)
    console.log(result);
  };
  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
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
              <Route
                path="/login"
                element={<Login loginSubmitHandler={loginSubmitHandler} />}
              />
              <Route path="/register" element={<Register />} />
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
