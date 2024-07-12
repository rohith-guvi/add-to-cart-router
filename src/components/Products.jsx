import { useEffect } from "react";
import Card from "./Card";

const Products = ({
  productData,
  setProductData,
  addToCart,
  removeFromCart,
  cart,
}) => {
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  });
  return (
    <div
      className={`${
        productData.length > 0
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6 w-full p-4 mt-4 text-center text-white"
          : "hidden"
      }`}
    >
      {productData.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default Products;
