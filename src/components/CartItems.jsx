import React, { useEffect } from "react";
import trashIcon from "../assets/trash-icon.svg";

const CartItems = ({ cart, removeFromCart, addToCart }) => {
  return (
    <>
      <div className="w-full lg:w-1/2 xl:w-1/2">
        {cart?.length !== 0 ? (
          cart?.map((product) => (
            <div
              key={product.id}
              className="flex  justify-center items-center gap-2 my-4  w-full bg-stone-900 rounded border-[2px] border-stone-800"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-14 sm:mr-4 md:mr-4 lg:mr-4 py-2  rounded bg-white"
              />
              <div className="flex flex-col mr-4 w-full">
                <h2 className="text-white text-sm sm:text-md md:text-md lg:text-md xl:text-[14px]">
                  {product.title}
                </h2>
                <p className="text-white text-sm sm:text-md md:text-md lg:text-md xl:text-[14px]">$ {product.price}</p>
              </div>

              <div className="flex items-center justify-end gap-4 w-full">
                <select
                  value={product.quantity}
                  onChange={(e) => addToCart(product, e.target.value)}
                  className="text-white text-xs sm:text-xs md:text-md lg:text-md xl:text-[14px] rounded bg-stone-900 outline-none"
                >
                  {[1, 2, 3, 4, 5].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
                <p className="text-white text-xs sm:text-xs md:text-md lg:text-md xl:text-[14px] w-16">
                  ${product.quantity * product.price}
                </p>
                <button
                  className="text-white rounded mx-2"
                  onClick={() => removeFromCart(product)}
                >
                  <img src={trashIcon} alt="cart-icon" className="m-0 p-0" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">Cart is empty</p>
        )}
      </div>
      <div></div>
    </>
  );
};

export default CartItems;
