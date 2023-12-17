import { useContext, useEffect, useState } from 'react';
import * as drinkService from '../../services/drinkService'

import { Link} from 'react-router-dom'
import Drink from '../Catalog/drinkItem/Drink';
import AuthContext from '../../contexts/authContext';
export default function Catalog() {
    const{ email, userId}= useContext(AuthContext)
  const [drinks, setDrinks]= useState([])
  

  useEffect(()=>{
     drinkService.getMyDrinks(userId)
     .then(result=> setDrinks(result))
     .catch(err=> console.log(err))
  },[userId])
  return ( 
    <>
    <div id="drink" className="tm-page-content">
    <nav className="tm-black-bg tm-drinks-nav">
    <ul>
        
        <li>
          <Link to="/profile" className="tm-tab-link active" data-id="all">
            My Drinks
          </Link>
          </li>
        <li>
          <Link to="/favorites" className="tm-tab-link" data-id="all">
            Favorites
          </Link>
          </li>
      </ul>
    </nav>
    </div>     
      <div className="tm-tab-content">
            <div className="tm-list">
              {drinks.map(drink=>(
                <Drink key={drink._id} {...drink} />
              ))}
              {drinks.length===0 && <h3 className="no-drinks">No Drinks</h3>}
            </div>
        </div>
    </>
    
  );
}