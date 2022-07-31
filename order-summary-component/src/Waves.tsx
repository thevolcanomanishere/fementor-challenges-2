import React from "react";

const style = `
    .wave {
        animation: wave 8s linear infinite;
      }

      .wave1 {
        animation: wave1 10s linear infinite;
      }

      .wave2 {
        animation: wave2 12s linear infinite;
      }

      @keyframes wave {
        0% {
          transform: translateX(0%);
        }

        100% {
          transform: translateX(100%);
        }
      }

      @keyframes wave1 {
        0% {
          transform: scaleY(1.2) translateX(0%);
        }

        100% {
          transform: scaleY(1.2) translateX(100%);
        }
      }

      @keyframes wave2 {
        0% {
          transform: scaleY(.8) translateX(0%);
        }

        100% {
          transform: scaleY(.8) translateX(100%);
        }
      }
}`;

const Waves = ({ viewBox }: { viewBox: string }) => {
  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style type="text/css">{style}</style>
        <path
          id="sineWave"
          fill="#0099ff"
          fillOpacity="0.2"
          d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0"
        />
      </defs>
      <use className="wave" href="#sineWave" />
      <use className="wave" x="-100%" href="#sineWave" />
      <use className="wave1" href="#sineWave" />
      <use className="wave1" x="-100%" href="#sineWave" />
      <use className="wave2" href="#sineWave" />
      <use className="wave2" x="-100%" href="#sineWave" />
    </svg>
  );
};

export default Waves;
