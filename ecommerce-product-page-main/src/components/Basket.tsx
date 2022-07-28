import { useContext, useState } from "react";
import { ReactComponent as IconBasket } from "../../public/icon-cart.svg";
import CartContext from "../contexts/CartContext";

export const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const basketStyle = showBasket
    ? "flex flex-col justify-start w-[20rem] absolute top-11 -right-36 border rounded-lg bg-white shadow-xl mr-10"
    : "hidden";
  return (
    <div className="m-auto relative">
      <div
        className="cursor-pointer"
        onClick={() => setShowBasket(!showBasket)}
      >
        <IconBasket />
      </div>
      <section className={basketStyle}>
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold p-5">Cart</h1>
          <div
            onClick={() => setShowBasket(false)}
            className="text-xl p-5 cursor-pointer"
          >
            X
          </div>
        </div>
        <div className="border-b" />
        <div className="flex min-h-fit">
          {cart?.length ? (
            <h1>{cart.length}</h1>
          ) : (
            <h2 className="m-auto p-20 text-gray-500 font-semibold">
              Your cart is empty.
            </h2>
          )}
        </div>
      </section>
    </div>
  );
};
