import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-row space-x-6 text-gray-500">
      <p className="font-sans cursor-pointer">Collections</p>
      <p className="font-sans cursor-pointer">Men</p>
      <p className="font-sans cursor-pointer">Women</p>
      <p className="font-sans cursor-pointer">About</p>
      <p className="font-sans cursor-pointer">Contact</p>
    </nav>
  );
};

export default Nav;
