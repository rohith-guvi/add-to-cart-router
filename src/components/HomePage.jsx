import React from "react";
import Header from "./Header";
import Products from "./Products";

const HomePage = ({ productData, setProductData, addToCart,removeFromCart, cart }) => {
  return (
    <Products
      productData={productData}
      setProductData={setProductData}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
};

export default HomePage;
