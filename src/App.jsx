import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const Navigate = useNavigate();

  const addToCart = (product, quantity) => {
    if (quantity) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...product, quantity: quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => product.id !== item.id));
  };

  const navToCart = () => {
    Navigate("/cart");
  };

  const navToHome = () => {
    Navigate("/");
  };

  return (
    <div className="bg-stone-900 p-8 min-h-screen ">
      <Header cart={cart} navToCart={navToCart} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              productData={productData}
              setProductData={setProductData}
              addToCart={addToCart}
              cart={cart}
              removeFromCart={removeFromCart}
              navToCart={navToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              navToHome={navToHome}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
