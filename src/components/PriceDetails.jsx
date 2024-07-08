import React, { useEffect, useState } from "react";

const PriceDetails = ({ cart }) => {
  const [total, setTotal] = useState(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  );

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    );
  }, [cart]);

  return (
    <div className="flex flex-col justify-between  w-full lg:w-1/2 gap-4 text-white border border-stone-800 p-4 max-h-[250px] ">
      <h1 className="text-xl ">Price Details</h1>
      <div className="flex justify-between">
        <p>Price [ {cart.length} item(s) ]</p>
        <p>$ {total}</p>
      </div>
      <div className="flex justify-between">
        <p>Discount</p>
        <p>-$ {((total * 10) / 100).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>Delivery Charges</p>
        <p className="text-[#4caf50]">Free </p>
      </div>
      <div className="flex justify-between">
        <p>Final Amount</p>
        <p>{(total - (total * 10) / 100).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PriceDetails;
