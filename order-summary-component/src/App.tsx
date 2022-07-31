/// <reference types="vite-plugin-svgr/client" />
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as IconMusic } from "../public/icon-music.svg";
import Hero from "./Hero";
import Waves from "./Waves";

const App = () => {
  const [documentDimensions, setDocumentDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // const handleSizeChange = useCallback((size: typeof documentDimensions) => {
  //   console.log(size);
  //   setDocumentDimensions(size);
  // }, []);
  // detect document resize and set documentDimentions

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      setDocumentDimensions({
        width: e.target.innerWidth,
        height: e.target.innerHeight,
      });
    });
    return () =>
      window.removeEventListener("resize", (e: any) =>
        setDocumentDimensions({
          width: e.target.innerWidth,
          height: e.target.innerHeight,
        })
      );
  }, [window]);

  const wavesViewBox = `0 0 1440 ${documentDimensions.height / 2}`;

  return (
    <main className="flex justify-center items-center h-screen overflow-hidden">
      <div className="flex flex-col justify-between absolute h-screen w-screen z-0 overflow-hidden">
        <Waves viewBox={wavesViewBox} />
        <div className="rotate-180">
          <Waves viewBox={wavesViewBox} />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center rounded-xl max-w-sm shadow-xl z-10 mx-5">
        <Hero style="rounded-t-lg" />
        <div className="flex flex-col p-10 space-y-5 bg-white rounded-b-xl">
          <div className="flex flex-col justify-center mx-auto align-middle text-center">
            <h1 className="text-2xl font-bold mb-5">Order Summary</h1>
            <p className="text-gray-600 text-sm sm:text-md">
              You can now listen to millions of songs, audiobooks and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="flex flex-row bg-gray-100 rounded-xl justify-between p-3">
            <div className="flex flex-row">
              <IconMusic />
              <div className="flex flex-col ml-4 pt-1">
                <h2 className="font-semibold text-sm">Annual Plan</h2>
                <p className="text-gray-600 text-sm">$59.99/year</p>
              </div>
            </div>
            <span className="text-sm underline hover:no-underline my-auto text-blue-600 hover:text-[#756DE9] select-none">
              Change
            </span>
          </div>

          <button className="bg-blue-800 hover:bg-[#756DE9] hover:shadow-xl h-12 text-white rounded-lg select-none animate-wiggle">
            Proceed to Payment
          </button>

          <span className="text-gray-600">Cancel Order</span>
        </div>
      </div>
    </main>
  );
};

export default App;
