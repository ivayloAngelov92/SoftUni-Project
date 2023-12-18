import { useContext, useEffect, useState } from 'react';
import * as drinkService from '../../services/drinkService'

import { Link} from 'react-router-dom'
import Drink from '../Catalog/drinkItem/Drink';
import AuthContext from '../../contexts/authContext';
import LikeContext from '../../contexts/likeContext';
export default function Catalog() {
    const{ username}= useContext(AuthContext)
    const { likedProducts }= useContext(LikeContext)
     const [drinks, setDrinks]= useState(likedProducts)
  useEffect(()=>{
      drinkService.getAll()
      .then(result=> result.filter(drink=>likedProducts.includes(drink._id)))
      .then(result=> setDrinks(result))
      .catch(err=> alert(err))
  },[likedProducts])

  return ( 
    <>
    <div id="drink" className="tm-page-content">
    <nav className="tm-black-bg tm-drinks-nav">
    <ul>
        
        <li>
          <Link to="/profile" className="tm-tab-link" data-id="all">
          {`${username}'s`} Creations
          </Link>
          </li>
        <li>
          <Link to="/favorites" className="tm-tab-link active" data-id="all">
          {`${username}'s`} Favorites
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