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
    ? "flex flex-col justify-start w-[25rem] absolute top-11 -right-96 md:-right-52 border rounded-lg bg-white shadow-xl md:mr-20 xl:mr-10"
    : "hidden";

  const cartBounceStyle = cartBounce
    ? `cursor-pointer animate-bounce-short`
    : "cursor-pointer";

  useEffect(() => {
    if (cart && cart.length > 0) {
      if (cartBounce === true) {
        setCartBounce(false);
      }
      setCartBounce(true);
      const timerId = setInterval(() => {
        setCartBounce(false);
      }, 5000);
      return () => clearInterval(timerId);
    }
  }, [cart]);

  return (
    <div ref={parent} className="m-auto relative">
      <div
        className={cartBounceStyle}
        onClick={() => setShowBasket(!showBasket)}
      >
        <IconBasket />
        {cart && (
          <p className="rounded-full text-center -p-1 bg-orange-400 text-white text-sm h-5 w-fit px-1 absolute font-sans -top-3 -right-2">
            {cart?.length}
          </p>
        )}
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
          <div className="flex h-52">
            {cart?.length ? (
              <div className="flex flex-col flex-grow justify-between px-5 py-8">
                <div className="flex flex-row">
                  <img
                    className="h-14 w-14 rounded"
                    src="https://picsum.photos/200"
                    alt="Cart item picture"
                  />
                  <div className="flex flex-col">
                    <p className="">{cart[0].name}</p>
                  </div>
                </div>
                <button className="bg-orange-400 text-white rounded-lg h-2/5">
                  Checkout
                </button>
              </div>
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
