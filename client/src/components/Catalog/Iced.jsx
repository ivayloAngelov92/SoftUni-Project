import { useEffect, useState } from 'react';
import * as drinkService from '../../services/drinkService'

import { Link} from 'react-router-dom'
import Drink from './drinkItem/Drink';
export default function Iced() {

  const [drinks, setDrinks]= useState([])

  useEffect(()=>{
     drinkService.getAll()
     .then(result=> result.filter(drink=>drink.type=== 'iced'))
     .then(result=> setDrinks(result))
     .catch(err=> console.log(err))
  },[])
  return ( 
    <>
    <div id="drink" className="tm-page-content">
    <nav className="tm-black-bg tm-drinks-nav">
    <ul>
        <li>
          <Link to="/" className="tm-tab-link" data-id="all">
            Our Latest Additions
          </Link>
        </li>
        <li>
          <Link to="/drinks" className="tm-tab-link" data-id="all">
            All drinks
          </Link>
        </li>
        <li>
          <Link to="/drinks/iced" className="tm-tab-link active" data-id="cold">
            Iced
          </Link>
        </li>
        <li>
          <Link to="/drinks/hot" className="tm-tab-link" data-id="hot">
            Hot
          </Link>
        </li>
        <li>
          <Link to="/drinks/juice" className="tm-tab-link" data-id="juice">
            Fruit Juice
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