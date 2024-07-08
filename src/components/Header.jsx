import cartLogo from "../assets/cart-icon.svg";

const Header = ({ cart, navToCart }) => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center bg-stone-900">
        <h1 className="text-white  text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center sm:w-fill md:w-fill lg:w-fill">
          Add to Cart{" "}
          <span className="hidden sm:inline md:inline lg:inline xl:inline">
            Task Using Router
          </span>
        </h1>
        <button
          className="flex justify-center items-center gap-6 border border-[#4caf50] text-white p-2 w-32 sm:px-6 md:px-6 lg:px-6 rounded h-14"
          onClick={navToCart}
        >
          <img src={cartLogo} alt="cart-icon" className="m-0 p-0" />
          {cart.length}
        </button>
      </div>
    </>
  );
};

export default Header;
