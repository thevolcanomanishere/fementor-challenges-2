import autoAnimate from "@formkit/auto-animate";
import { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as IconBasket } from "../../public/icon-cart.svg";
import CartContext from "../contexts/CartContext";

export const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [cartBounce, setCartBounce] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 100 });
  }, [parent]);

  const basketStyle = showBasket
    ? "flex flex-col justify-start w-[20rem] absolute top-11 -right-36 border rounded-lg bg-white shadow-xl mr-10"
    : "hidden";

  const cartBounceStyle = cartBounce
    ? `cursor-pointer animate-bounce-short`
    : "cursor-pointer";

  useEffect(() => {
    if (cart && cart.length > 0) {
      setCartBounce(true);
      setInterval(() => {
        setCartBounce(false);
      }, 5000);
    }
  }, [cart]);

  return (
    <div ref={parent} className="m-auto relative">
      <div
        className={cartBounceStyle}
        onClick={() => setShowBasket(!showBasket)}
      >
        <IconBasket />
      </div>
      {showBasket && (
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
      )}
    </div>
  );
};
