import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="tm-container">
      <div className="tm-row">
        <Header/>
        <div className="tm-right">
        <main className="tm-main">
        <Routes>
          <Route path='/' element= { <Catalog/>}/>
          <Route path='/drinks/iced' element= { <Iced/>}/>
          <Route path='/drinks/hot' element= { <Hot/>}/>
          <Route path='/drinks/juice' element= { <Juice/>}/>
          <Route path='/login' element= { <Login/>}/>
          <Route path='/register' element= { <Register/>}/>
          <Route path='/create' element= { <Create/>}/>
          <Route path='/drinks/:id' element= { <Details/>}/>

        </Routes>
        </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
