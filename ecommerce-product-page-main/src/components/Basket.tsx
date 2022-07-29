import autoAnimate from "@formkit/auto-animate";
import { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as IconBasket } from "../../public/icon-cart.svg";
import { ReactComponent as IconDeleteBasket } from "../../public/icon-delete.svg";
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

  const createImageUri = (imageUri: string) => {
    return new URL(imageUri, import.meta.url).href;
  };

  return (
    <div ref={parent} className="m-auto relative">
      <div
        className={cartBounceStyle}
        onClick={() => setShowBasket(!showBasket)}
      >
        <IconBasket />
        {cart && cart.length > 0 && (
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
                    src={createImageUri(cart[0].images[0])}
                    alt="Cart item picture"
                  />
                  <div className="flex flex-col">
                    <p className="font-sans ml-2 text-gray-600 text-xl">
                      {cart[0].productName}
                    </p>
                    <div className="flex flex-row">
                      <p className="font-sans ml-2 text-xl text-gray-600">
                        ${cart[0].price * (cart[0].discountPercentage / 100)} x{" "}
                        {cart.length}{" "}
                        <span className="font-bold pt-1 text-black">
                          $
                          {cart[0].price *
                            (cart[0].discountPercentage / 100) *
                            cart.length}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      // remove item at the end of the cart array and return array
                      const newCart = cart.slice(0, -1);
                      setCart(newCart);
                    }}
                    className="m-auto pl-5"
                  >
                    <IconDeleteBasket />
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
