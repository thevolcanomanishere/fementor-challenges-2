/// <reference types="vite-plugin-svgr/client" />

import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  return (
    <main className="flex flex-col justify-center align-middle mx-auto my-10 max-w-[1000px]">
      <Header />
      <Product />
    </main>
  );
};

export default App;
