import CartItems from "./CartItems";
import PriceDetails from "./PriceDetails";

const CartPage = ({ cart, removeFromCart, addToCart, navToHome }) => {
  return (
    <div className="">
      <div className="flex gap-4 items-center my-4">
        <button
          className="border border-[#4caf50] text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={navToHome}
        >
          {"<"}
        </button>
        <h1 className="text-white text-xl">Cart</h1>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <CartItems
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
        <PriceDetails cart={cart} />
      </div>
    </div>
  );
};

export default CartPage;
