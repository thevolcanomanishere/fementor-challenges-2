/// <reference types="vite-plugin-svgr/client" />

import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import CartContext from "./contexts/CartContext";

const App = () => {
  const [cart, setCart] = useState();

  return (
    <main className="flex flex-col justify-center align-middle mx-auto my-2 lg:my-10 max-w-[1000px]">
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Product />
      </CartContext.Provider>
    </main>
  );
};

export default App;
