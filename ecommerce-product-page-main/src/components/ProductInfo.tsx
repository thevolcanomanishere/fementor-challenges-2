import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as IconBasketWhite } from "../../public/icon-cart-white.svg";
import CartContext from "../contexts/CartContext";

export interface IProductInfo {
  companyName: string;
  productName: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
}

const ProductInfo = ({ productInfo }: { productInfo: IProductInfo }) => {
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const updateCart = () => {
    if (count > 0) {
      if (cart) {
        const products = [...cart, ...new Array(count).fill(productInfo)];
        return setCart(products);
      }
      // fill an array with the amount of count
      const products = [...new Array(count).fill(productInfo)];
      return setCart(products);
    }
    if (cart) {
      const newCart = [...cart, productInfo];
      return setCart(newCart);
    }
    return setCart([productInfo]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <section className="max-w-[480px] flex flex-col mx-auto">
      <div className="mx-8 sm:mx-0">
        <h3 className="text-orange-400 uppercase mb-6 font-bold mt-12">
          {productInfo.companyName}
        </h3>
        <h1 className="text-5xl font-semibold mb-10">
          {productInfo.productName}
        </h1>
        <p className="font-sans my-4 mb-6 text-gray-500">
          {productInfo.description}
        </p>
        <div className="flex flex-row space-x-3 justify-between lg:justify-start max-w-[416px]">
          <div className="flex flex-row lg:flex-col">
            <h2 className="text-4xl font-semibold">
              ${productInfo.price * (productInfo.discountPercentage / 100)}
            </h2>
            <h3 className="text-2xl text-gray-400 line-through line-sth hidden lg:block">
              ${productInfo.price}
            </h3>
            <div className="bg-orange-100 rounded h-8 px-1 text-xl text-orange-600 font-bold ml-4 lg:hidden">
              {productInfo.discountPercentage}%
            </div>
          </div>
          <div className="bg-orange-100 rounded h-6 px-1 text-orange-600 font-bold hidden lg:block mt-1">
            {productInfo.discountPercentage}%
          </div>
          <h4 className="text-2xl text-gray-400 line-through line-sth lg:hidden">
            ${productInfo.price}
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5 my-6">
          <div className="flex flex-row bg-gray-100 rounded-lg mb-5 h-14">
            <div
              onClick={() => {
                if (count > 0) setCount(count - 1);
                return;
              }}
              className="text-orange-400 m-auto text-3xl pb-1 w-10 text-center cursor-pointer"
            >
              -
            </div>

            <div className="my-auto w-10 text-center">{count}</div>
            <div
              onClick={() => setCount(count + 1)}
              className="text-orange-400 m-auto text-3xl pb-1 w-10 text-center cursor-pointer"
            >
              +
            </div>
          </div>
          <button
            onClick={() => updateCart()}
            className="bg-[#EF843A] text-white h-14 space-x-3 p-4 lg:w-3/5 rounded-lg shadow-lg shadow-orange-300"
          >
            <span className=" flex flex-row space-x-3 justify-center">
              <IconBasketWhite />
              <p className="font-sans">Add to cart</p>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
