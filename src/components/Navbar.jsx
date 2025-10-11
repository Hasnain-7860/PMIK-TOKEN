import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bgdott from '../assets/bgdott.svg';
import Wallet from "../../Wallet";


const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <div className="p-14 px-20 ">
      <img className="absolute top-[-92px] -left-[0px] w-full md:w-[546.746px] md:-top-[30px] h-[440px] z-0 pointer-events-none" src={bgdott} alt="" />
      <nav className="flex items-center justify-between p-4 py-1 rounded-full bg-[#032703] text-white h-[68px]">
        <div className="text-2xl ">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <a
            href="#"
            onClick={() => setActive("home")}
            className={`px-6 py-2 rounded-full ${
              active === "home" ? "bg-[#1C3D1C] text-white" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setActive("careers")}
            className={`px-4 py-2 rounded-full ${
              active === "careers" ? "bg-[#1C3D1C] text-white" : ""
            }`}
          >
            Careers
          </a>
          <a
            href="#"
            onClick={() => setActive("about")}
            className={`px-4 py-2 rounded-full ${
              active === "about" ? "bg-[#1C3D1C] text-white" : ""
            }`}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setActive("security")}
            className={`px-4 py-2 rounded-full ${
              active === "security" ? "bg-[#1C3D1C] text-white" : ""
            }`}
          >
            Security
          </a>
        </div>
        <div>
            <Wallet/>
          {/* <button className="bg-[#FE0002] text-white text-md px-4 py-2 rounded-full">
            Connect Wallet
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
