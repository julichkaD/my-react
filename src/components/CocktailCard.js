import React from 'react';
// import Products from './Products';
import CocktailPage from './CocktailPage';

const CocktailCard = (props) => {
  const {username} = props;
 
  return (
    <div>
      <h2>
        Dear {username.charAt(0).toUpperCase()+ username.slice(1)}, find a perfect drink for yourself..
      </h2>
     
      {/* <Products /> */}
      <CocktailPage />
    </div>
  );
}

export default CocktailCard;
