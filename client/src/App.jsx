import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';


import {AuthProvider} from './contexts/authContext';
import { lazy, Suspense } from 'react';

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
import Edit from './components/Edit/Edit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/Guards/AuthGuard';
import Latest from './components/Catalog/Latest';
import Details from './components/Details/Details';
import Contact from './components/ContactUs/Contact';
// const Details= lazy(()=> import('./components/Details/Details'))
function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
    <div className="tm-container">
      <div className="tm-row">
        <Header />
        <div className="tm-right">
          <main className="tm-main">
          
            <Routes>
              <Route path="/drinks/latest" element={<Latest />} />
              <Route path="/" element={<Catalog />} />
              <Route path='/contact' element= {<Contact/>}/>
              <Route path="/drinks/iced" element={<Iced />} />
              <Route path="/drinks/hot" element={<Hot />} />
              <Route path="/drinks/juice" element={<Juice />} />
              <Route path="/login"element={<Login />}/>
              <Route path="/register" element={<Register />} />
             {/* <Suspense fallback={<h1>Insert spinner component...</h1>}> */}
              <Route path="/drinks/:drinkId" element={<Details />} />
              {/* </Suspense> */}
              <Route element={<AuthGuard/>}>
              <Route path="/create" element={<Create />} />
              <Route path="/drinks/:drinkId/edit" element={<Edit />} />
              <Route path="/logout" element={<Logout />} />
              </Route>
            </Routes>
            
          </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;



// navigate(-1) returns 1 page back