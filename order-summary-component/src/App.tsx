/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as IconMusic } from "../public/icon-music.svg";
import Waves from "./Waves";

const App = () => {
  return (
    // <main
    //   className="flex justify-center items-center h-screen bg-gradient-to-r
    // from-blue-200
    // via-white
    // to-qrBlue
    // background-animate"
    // ></main>

    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between absolute h-screen w-screen z-0">
        <Waves viewBox="0 0 1440 320" />
        <div className="rotate-180">
          <Waves viewBox="0 0 1440 320" />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center rounded-xl shadow-xl border w-96 z-10">
        <div>
          <img
            className="rounded-t-2xl"
            src="../public/illustration-hero.svg"
            alt="Hero"
          />
        </div>
        <div className="flex flex-col p-10 space-y-5 bg-white rounded-b-xl">
          <div className="flex max-w-xs flex-col justify-center mx-auto align-middle text-center">
            <h1 className="text-2xl font-bold mb-5">Order Summary</h1>
            <p className="text-gray-600 text-sm sm:text-md">
              You can now listen to millions of songs, audiobooks and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="flex flex-row bg-gray-100 rounded-xl justify-between p-4">
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

          <button className="bg-blue-800 hover:bg-[#756DE9] hover:shadow-xl h-12 text-white rounded-lg select-none">
            Proceed to Payment
          </button>

          <span>Cancel Order</span>
        </div>
      </div>
    </main>
  );
};

export default App;
