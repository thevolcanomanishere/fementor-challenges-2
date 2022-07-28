import React from "react";
import { ReactComponent as IconBasketWhite } from "../../public/icon-cart-white.svg";
import Lightbox from "./Lightbox";

const Product = () => {
  const images = [
    `../../public/image-product-1.jpg`,
    `../../public/image-product-2.jpg`,
    `../../public/image-product-3.jpg`,
    `../../public/image-product-4.jpg`,
  ];

  return (
    <div className="flex flex-col lg:flex-row mx-auto lg:justify-between mt-20">
      <Lightbox images={images} />
      <section className="max-w-[480px] flex flex-col mx-auto">
        <div className="mx-8 sm:mx-0">
          <h3 className="text-orange-400 uppercase mb-6 font-bold mt-16">
            Sneaker Company
          </h3>
          <h1 className="text-5xl font-bold mb-10">
            Fall Limited Edition Sneakers
          </h1>
          <p className="font-sans my-4 mb-6 text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-row space-x-3">
            <div className="flex flex-col">
              <h4 className="text-4xl font-semibold">$125.00</h4>
              <h5 className="text-2xl text-gray-400 line-through line-sth">
                $250.00
              </h5>
            </div>
            <div className="bg-orange-100 rounded h-6 px-1 text-orange-600 font-bold">
              50%
            </div>
          </div>
          <div className="flex flex-row space-x-5 my-6">
            <div className="flex flex-row bg-gray-200 space-x-6 px-5 rounded-lg cursor-pointer">
              <div className="text-orange-400 m-auto text-3xl pb-1">-</div>
              <div className="m-auto">0</div>
              <div className="text-orange-400 m-auto text-3xl pb-1">+</div>
            </div>
            <button className="bg-orange-400 text-white flex flex-row space-x-3 justify-center p-4 w-3/5 rounded-lg  shadow-lg shadow-orange-300">
              <div className="hover:animate-[wiggle_1s_ease-in-out_infinite]">
                <IconBasketWhite />
              </div>
              <p className="font-sans">Add to cart</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
