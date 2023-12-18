import { createContext, useContext, useState } from 'react';

// import usePersistedState from '../hooks/usePersistedState';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const addLike = (productId) => {
    setLikedProducts((prevLikedProducts) => [...prevLikedProducts, productId]);
    // localStorage.setItem("liked", productId)
  };

  const removeLike = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.filter((id) => id !== productId)
      );
      // localStorage.removeItem('liked', productId)
  };

  return (
    <LikeContext.Provider value={{ likedProducts, addLike, removeLike }}>
      {children}
    </LikeContext.Provider>
  );
};

LikeContext.displayName = 'LikeContext';

export default LikeContext;

