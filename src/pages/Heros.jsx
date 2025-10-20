import React, { useState } from "react";
import Eth from "../assets/Ethereum.svg";
import BSC from "../assets/BSC.svg";
import Polygon from "../assets/Polygon.svg";
import image1 from "../assets/Image.svg";
import usa from "../assets/usa.svg";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import Wallet from "../../Wallet";
import Button from "../atom/button";



const PMIK804 = () => {
    const isConnected = useActiveWalletConnectionStatus();
    const [bnbValue, setBnbValue] = useState("");
      const [pmikValue, setPmikValue] = useState("");

     const handleBnbChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setBnbValue(value);
    setPmikValue(Number((value * Number(currentPrice)).toFixed(2)));
  };

   const handlePmikChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setPmikValue(value);
    setBnbValue(Number((value / Number(currentPrice)).toFixed(2)));
  };
  


  const ActiveBtn = () => {
    if (isConnected === "connected") {
      return (
        <Button
          className="w-full bg-[#FF0000] text-white text-[16px] cursor-pointer font-lexend font-[600] leading-[24px] rounded-full px-4 py-2 hover:bg-red-600 transition duration-300 ease-in-out"
          onClick={() => buyTokenHandler(isReferral, referrerAddress)}
          btnName="Buy PMIK804"
        />
      );
    } else {
      return <Wallet/>;
    }
  };
  
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-[#0f2611]   flex  p-3 md:p-6 max-w-[410px]    flex-col items-center gap-[20.66px] rounded-[8.264px]  border-[0.689px] text-white  relative z-10 border-white/10 ">
        
        
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h2 className="text-center text-2xl font-bold mb-8">Buy PMIK804 Now</h2>

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

           
            <div className="w-full bg-[#173a17] rounded-full h-2 mb-3">
              <div
                className="bg-[#00ff87] h-2 rounded-full"
                style={{ width: "76.9%" }}
              ></div>
            </div>

           
            <p className="text-center text-sm mb-6 text-gray-300">
              Raised:{" "}
              <span className="font-semibold text-white">$769,119</span> /{" "}
              <span className="text-gray-400">$1,000,000</span>
            </p>

           
            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center text-center  gap-2 bg-[#FE0002] hover:bg-red-700 px-6 py-2 rounded-xl text-sm font-medium">
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

            
            <div className="bg-[#143014] rounded-2xl border border-[#1f3d1e] grid grid-cols-2 overflow-hidden divide-x divide-[#1f3d1e] divide-y">
              
              <div className="flex flex-col items-center justify-center py-6 px-2">
                <div className="flex items-center mb-1 space-x-2">
                  <img src={image1} alt="India" className="w-5 h-5" />
                  <p className="font-semibold">INR</p>
                </div>
                <p className="text-xs text-gray-400">Indian Rupees</p>
                <div className="flex flex-col  items-center gap-[6.887px] p-[13.773px] flex-[1_0_0] border-t border-white/10 mt-6   ">
            <p className="font-lexend flex justify-center items-center gap-[6.887px] p-[10.66px_13.773px] flex-[1_0_0]">
              <input
                type="number"
                value={bnbValue}
                onChange={handleBnbChange}
                className="bg-transparent border-none w-full outline-none text-white text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter BNB"
              />
            </p>
          </div>
              </div>
             

              
              <div className="flex flex-col items-center justify-center py-6 px-2">
                <div className="flex items-center mb-1 space-x-2">
                  <img src={usa} alt="USA" className="w-5 h-5" />
                  <p className="font-semibold">USD</p>
                </div>
                <p className="text-xs text-gray-400">United States Dollar</p>
                <div className="flex flex-col items-center gap-[6.887px] p-[13.773px] flex-[1_0_0]  border-t border-white/10 mt-6">
            <p className="font-lexend flex justify-center items-center gap-[6.887px] p-[20.66px_13.773px] flex-[1_0_0]">
              <input
                type="number"
                value={pmikValue}
                onChange={handlePmikChange}
                className="bg-transparent border-none w-full outline-none text-white text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter PMIK804"
              />
            </p>
          </div>
              </div>
            </div>
          </div>
        </div>

        <ActiveBtn/>
        {/* <button className="bg-[#FE0002] hover:bg-red-700 transition duration-300 w-full py-3 mt-6 text-lg font-semibold hover:cursor-pointer rounded-full">
          Buy PMIK804
        </button> */}
      </div>
    </div>
  );
};

export default PMIK804;
