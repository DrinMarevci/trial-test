import React from "react";

function Banner() {
  return (
    <div className="banner w-auto m-2 bg-white drop-shadow-lg p-2 rounded-lg">
      <div className="button-container flex justify-around items-center w-auto max-w-screen-4xl">
        <button className="button rounded-md h-20 flex-1 mx-1 bg-yellow text-white text-lg">
          14 On Road
        </button>
        <button className="button rounded-md h-20 flex-1 mx-1 bg-green text-white text-lg">
          3 Completed
        </button>
        <button className="button rounded-md h-20 flex-1 mx-1 bg-red text-white text-lg">
          2 On Hold
        </button>
      </div>
    </div>
  );
}

export default Banner;
