import { createContext, useContext, useState } from 'react';
import AuthContext from './authContext';
// import usePersistedState from '../hooks/usePersistedState';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const {userId}= useContext(AuthContext)
  const [likedProducts, setLikedProducts] = useState([]);

  const addLike = (productId,) => {
    setLikedProducts((prevLikedProducts) => [...prevLikedProducts, productId]);
  
  };

  const removeLike = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.filter((id) => id !== productId)
      );

  };

  return (
    <LikeContext.Provider value={{ likedProducts, addLike, removeLike }}>
      {children}
    </LikeContext.Provider>
  );
};

LikeContext.displayName = 'LikeContext';

export default LikeContext;

