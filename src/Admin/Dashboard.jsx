import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BsFillShareFill } from "react-icons/bs";
import logo from "../assets/logo.svg";
import Ico1 from "../assets/Ico1.svg";
import Ico2 from "../assets/Ico2.svg";
import Ico3 from "../assets/Ico3.svg";
import Ico4 from "../assets/Ico4.svg";
import Ico5 from "../assets/Ico5.svg";
import Ico6 from "../assets/Ico6.svg";


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard"); // default active

  const transactions = [
    { hash: "0x34a5...dfb2", amount: "2,000 PMIK804", type: "Received", date: "Apr 9, 2025", status: "Approved" },
    { hash: "0x76e9...1d63", amount: "150 PMIK804", type: "Reward", date: "Apr 9, 2025", status: "Approved" },
    { hash: "0x90bd...4e7f", amount: "500 PMIK804", type: "Sent", date: "Apr 9, 2025", status: "Approved" },
    { hash: "0x2ec3...4ac2", amount: "300 PMIK804", type: "Referral Bonus", date: "Apr 9, 2025", status: "Approved" },
  ];

  return (
    <div className="min-h-screen bg-[#071507] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="hidden lg:flex justify-start flex-col w-[290px] bg-[#032703] text-white">
        <div className="flex items-center justify-center py-[48px]">
          <img src={logo} alt="PMIK804" className="w-[150px] h-[40px] " />
        </div>
        <hr className="border-t-[1px] border-[#FFFFFF1A] mb-10" />

       <nav className="flex flex-col space-y-3 text-gray-300">
      {/* Dashboard */}
      <button 
        onClick={() => setActiveSection("dashboard")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition $ onsligho`}
      >
        <img src={Ico1} alt="Dashboard Icon" className="w-[24px] h-[24px] size-[16px] ml-3 font-[500 ] text-[#FFFFFF]" />
        <span className="text-16px text-white font-semibold" >Dashboard</span>
        {activeSection === "dashboard" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>

      {/* NFT Marketplace */}
      <button
        onClick={() => setActiveSection("nft")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition`}
      >
        <img src={Ico2} alt="NFT Marketplace Icon" className="w-[24px] h-[24px] size-[16px] ml-3" />
        <span className="text-16px text-white font-semibold">NFT Marketplace</span>
        {activeSection === "nft" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>

      {/* Tables */}
      <button
        onClick={() => setActiveSection("tables")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition `}
      >
        <img src={Ico3} alt="Tables Icon" className="w-[24px] h-[24px] ml-3" />
        <span className="text-16px text-white font-semibold">Tables</span>
        {activeSection === "tables" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>

      {/* Kanban */}
      <button
        onClick={() => setActiveSection("kanban")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition `}
      >
        <img src={Ico4} alt="Kanban Icon" className="w-[24px] h-[24px] ml-3" />
        <span className="text-16px text-white font-semibold">Kanban</span>
        {activeSection === "kanban" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>

      {/* Profile */}
      <button
        onClick={() => setActiveSection("profile")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition `}
      >
        <img src={Ico5} alt="Profile Icon" className="w-[24px] h-[24px] ml-3" />
        <span className="text-16px text-white font-semibold">Profile</span>
        {activeSection === "profile" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>

      {/* Sign In */}
      <button
        onClick={() => setActiveSection("signin")}
        className={`relative flex items-center gap-3 text-left rounded-lg py-2 px-3 transition `}
      >
        <img src={Ico6} alt="Sign In Icon" className="w-[24px] h-[24px] ml-3" />
        <span className="text-16px text-white font-semibold">Sign In</span>
        {activeSection === "signin" && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[4px] bg-[#FE0002] rounded-l-full"></span>
        )}
      </button>
    </nav>

        <div className="bg-[#e31e24] p-4 rounded-xl flex flex-col items-center text-center mt-auto">
          <img src="/" alt="coin" className="w-10 mb-2" />
          <p className="text-sm">Refer & Earn</p>
          <p className="text-xs text-yellow-300">
            Earn 5% commission when your invitees buy PMIK804.
          </p>
        </div>
      </aside>

      
      <main className="flex-1 p-4 md:p-6 lg:p-10 space-y-6">
        {activeSection === "dashboard" && (
          <>
            <h1 className="text-2xl font-semibold">Main Dashboard</h1>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Wallet Balance</p>
            <p className="text-2xl font-bold mt-2">7,540</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Total Rewards Earned</p>
            <p className="text-2xl font-bold mt-2">1,240</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Lifetime Referrals</p>
            <p className="text-2xl font-bold mt-2">32 Friends</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Commission Rate</p>
            <p className="text-2xl font-bold mt-2">5%</p>
            <p className="text-xs text-gray-400 mt-1">Earn 5% of every referral’s first purchase</p>
          </div>
        </div>

        <div className="bg-[#0f1f0f] rounded-xl p-4 md:p-6 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-3">Transaction History</h2>
              <table className="w-full text-left text-sm md:text-base">
                <thead className="text-gray-300 border-b border-gray-700">
                  <tr>
                    <th className="pb-2">Txn Hash</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Type</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      <td className="py-2">{tx.hash}</td>
                      <td>{tx.amount}</td>
                      <td>{tx.type}</td>
                      <td>{tx.date}</td>
                      <td className="flex items-center gap-1 text-green-400">
                        <FiCheckCircle /> {tx.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Refer & Earn */}
            <div className="bg-gradient-to-r from-[#132d13] to-[#1f4c1f] rounded-xl p-6 text-center relative overflow-hidden">
              <h2 className="text-xl font-semibold">
                Refer & Earn — Invite Your Friends!
              </h2>
              <p className="text-gray-300 mt-2">
                Earn 5% commission when your invitees buy PMIK804.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
                <input
                  type="text"
                  value="https://pmik804.io/ref/yourwalletaddress"
                  readOnly
                  className="bg-[#0c1a0c] border border-gray-700 rounded-lg px-3 py-2 w-full md:w-1/2 text-center text-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mt-2 md:mt-0">
                  <BsFillShareFill /> Share Link
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Current Token Price</p>
            <p className="text-xl font-bold text-red-400">1PMIK804 = $0.0023 USD</p>
            <p className="text-green-400 text-xs mt-1">+2.45%</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Market Cap</p>
            <p className="text-xl font-bold">$2.3M USD</p>
            <p className="text-green-400 text-xs mt-1">+2.45%</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">24h Volume</p>
            <p className="text-xl font-bold">$124,000 USD</p>
            <p className="text-green-400 text-xs mt-1">+2.45%</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl">
            <p className="text-sm text-gray-300">Liquidity Pool Balance</p>
            <p className="text-xl font-bold">$187,000 USD (BNB/PMIK804)</p>
            <p className="text-green-400 text-xs mt-1">+2.45%</p>
          </div>
          <div className="bg-[#122812] p-4 rounded-xl col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-sm text-gray-300">Total Supply Remaining</p>
            <p className="text-xl font-bold text-red-400">998,530,000 PMIK804</p>
            <p className="text-green-400 text-xs mt-1">+2.45%</p>
          </div>
        </div>
          </>
        )}

       
      </main>
    </div>
  );
};

export default Dashboard;
