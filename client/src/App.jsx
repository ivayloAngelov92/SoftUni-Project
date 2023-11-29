import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Hot from './components/Catalog/Hot';
import Juice from './components/Catalog/Juice';



function App() {
  return (
    <div className="tm-container">
      <div className="tm-row">
        <Header/>
        <div className="tm-right">
        <main className="tm-main">
        <Routes>
          <Route path='/' element= { <Catalog/>}/>
          <Route path='/drinks/hot' element= { <Hot/>}/>
          <Route path='/drinks/juice' element= { <Juice/>}/>

        </Routes>
        </main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
