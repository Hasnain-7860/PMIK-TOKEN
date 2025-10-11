import React from "react";
import Eth from "../assets/Ethereum.svg";
import BSC from "../assets/BSC.svg";
import Polygon from "../assets/Polygon.svg";
import image1 from "../assets/Image.svg";
import usa from "../assets/usa.svg";

const PMIK804 = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#0f2611] text-white rounded-2xl p-6 w-[410px] h-[534px] sm:w-[400px] shadow-lg border border-[#022702] flex flex-col z-10">
        
        {/* Top Section */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-center text-2xl font-bold mb-8">Buy PMIK804 Now</h2>

            {/* Price Info */}
            <div className="flex justify-between text-sm mb-3">
              <p>
                Current Price:{" "}
                <span className="text-[#00ff87] font-semibold">$0.18</span>
              </p>
              <p>
                Listing price:{" "}
                <span className="text-gray-300 font-semibold">$0.36</span>
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#173a17] rounded-full h-2 mb-3">
              <div
                className="bg-[#00ff87] h-2 rounded-full"
                style={{ width: "76.9%" }}
              ></div>
            </div>

            {/* Raised Info */}
            <p className="text-center text-sm mb-6 text-gray-300">
              Raised:{" "}
              <span className="font-semibold text-white">$769,119</span> /{" "}
              <span className="text-gray-400">$1,000,000</span>
            </p>

            {/* Network Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center text-center  gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl text-sm font-medium">
                <img  src={Eth} alt="Ethereum" className="w-4 h-4" /><p className=""> Ethereum</p>
              </button>
              <button className="flex items-center gap-2 bg-white hover:bg-gray-100 px-6 py-2 rounded-xl text-sm font-medium text-black">
                <img src={Polygon} alt="Polygon" className="w-4 h-4" /> Polygon
              </button>
              <button className="flex items-center gap-2 bg-white hover:bg-gray-100 px-6 py-2 rounded-xl text-sm font-medium text-black">
                <img src={BSC} alt="BSC" className="w-4 h-4" /> BSC
              </button>
            </div>

            <p className="text-sm mb-3 font-semibold">Money Exchange</p>

            {/* Currency Boxes */}
            <div className="bg-[#143014] rounded-2xl border border-[#1f3d1e] grid grid-cols-2 overflow-hidden divide-x divide-[#1f3d1e] divide-y">
              {/* INR Box */}
              <div className="flex flex-col items-center justify-center py-6 px-2">
                <div className="flex items-center mb-1 space-x-2">
                  <img src={image1} alt="India" className="w-5 h-5" />
                  <p className="font-semibold">INR</p>
                </div>
                <p className="text-xs text-gray-400">Indian Rupees</p>
                <p className="text-lg mt-2 font-semibold">5,0000</p>
              </div>

              {/* USD Box */}
              <div className="flex flex-col items-center justify-center py-6 px-2">
                <div className="flex items-center mb-1 space-x-2">
                  <img src={usa} alt="USA" className="w-5 h-5" />
                  <p className="font-semibold">USD</p>
                </div>
                <p className="text-xs text-gray-400">United States Dollar</p>
                <p className="text-lg mt-2 font-semibold">12.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <button className="bg-red-600 hover:bg-red-700 w-full py-3 mt-6 text-lg font-semibold hover:cursor-pointer rounded-full">
          Buy PMIK804
        </button>
      </div>
    </div>
  );
};

export default PMIK804;
