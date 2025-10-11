import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bgdott from "../assets/bgdott.svg";
import Wallet from "../../Wallet";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <div className="relative p-6 lg:p-14 lg:px-20">
      <img
        className="absolute top-[-92px] left-0 w-full lg:w-[546.746px] lg:-top-[30px] h-[440px] z-0 pointer-events-none"
        src={bgdott}
        alt=""
      />

      <nav className="relative flex items-center justify-between p-4 py-1 rounded-full bg-[#032703] text-white h-[68px] z-10">
        <div
          className="z-20 cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

       
        <div className="flex-1 flex justify-center lg:justify-start">
          <img src={logo} alt="Logo" className="w-[130px]" />
        </div>

        <div className="z-20">
          <Wallet />
        </div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2">
          <a
            href="#"
            onClick={() => handleLinkClick("home")}
            className={`px-6 py-2 rounded-full ${
              active === "home" ? "bg-[#1C3D1C]" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("careers")}
            className={`px-4 py-2 rounded-full ${
              active === "careers" ? "bg-[#1C3D1C]" : ""
            }`}
          >
            Careers
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("about")}
            className={`px-4 py-2 rounded-full ${
              active === "about" ? "bg-[#1C3D1C]" : ""
            }`}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("security")}
            className={`px-4 py-2 rounded-full ${
              active === "security" ? "bg-[#1C3D1C]" : ""
            }`}
          >
            Security
          </a>
        </div>

        {menuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-[#032703] text-white flex flex-col items-center py-6 space-y-4 rounded-2xl shadow-lg lg:hidden">
            <a
              href="#"
              onClick={() => handleLinkClick("home")}
              className={`px-6 py-2 rounded-full ${
                active === "home" ? "bg-[#1C3D1C]" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("careers")}
              className={`px-6 py-2 rounded-full ${
                active === "careers" ? "bg-[#1C3D1C]" : ""
              }`}
            >
              Careers
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("about")}
              className={`px-6 py-2 rounded-full ${
                active === "about" ? "bg-[#1C3D1C]" : ""
              }`}
            >
              About
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick("security")}
              className={`px-6 py-2 rounded-full ${
                active === "security" ? "bg-[#1C3D1C]" : ""
              }`}
            >
              Security
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
