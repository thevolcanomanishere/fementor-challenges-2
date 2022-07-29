/// <reference types="vite-plugin-svgr/client" />

const App = () => {
  return (
    <main
      className="flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-200
    via-white
    to-qrBlue
    background-animate"
    >
      <div className="text-center max-w-sm m-5 border rounded-2xl bg-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
        <div className="flex flex-col shadow-xl rounded-2xl">
          <img
            className="rounded-xl m-4"
            src="/image-qr-code.png"
            alt="QR code"
          />
          <div className="flex flex-col space-y-3 px-10 py-5">
            <h1 className="font-bold text-2xl">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-lg text-gray-400 pb-4">
              Scan the QR code to visit Frontend Mentor and take your coding
              skils to the next level
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
