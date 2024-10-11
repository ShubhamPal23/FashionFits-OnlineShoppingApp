import React from 'react';
import Productcard from './Prodcard';

const Home = ({ products }) => {
  return (
    <div>
      <h1>All Products</h1>
      <Productcard products={products} />
    </div>
  );
};

export default Home;
