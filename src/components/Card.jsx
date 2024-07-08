const Card = ({ product, addToCart, cart, removeFromCart }) => {
  return (
    <div
      key={product.id}
      className="bg-stone-900 max-w-sm rounded overflow-hidden shadow-lg border border-stone-700 hover:shadow-2xl"
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" bg-[#FFFFFF] w-full h-72 overflow-hidden flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full p-24"
          />
        </div>
        <h2 className="text-md mt-2 h-12 mx-3">{product.title}</h2>
        <p className="my-3 mb-1 p-4 text-md text-[#4caf50] font-bold">
          $ {product.price}
        </p>
        {cart.some((p) => p.id === product.id) ? (
          <button
            className="bg-[#4caf50] text-white p-2 px-4 rounded mb-4"
            onClick={() => removeFromCart(product)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="bg-[#4caf50] text-white p-2 px-4 rounded mb-4"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
