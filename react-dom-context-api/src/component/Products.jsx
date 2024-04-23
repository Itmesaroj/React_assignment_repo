// Products.js
import React, { useContext, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';
import { FeactDataContext } from './context';
import { Link } from 'react-router-dom';

function Products() {
  const { products, loading, error } = useContext(FeactDataContext);
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;
  console.log(products.data)
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.data.map((user)=>
       
        <div key={user.id}>
            <img src={user.avatar} alt="" />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
            <Link to={`/products/${user.id}`}>Click to view User details</Link>
        </div>
    )}
      </div>
    </div>
  );
}

export default Products;
