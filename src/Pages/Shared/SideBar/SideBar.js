/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import control from "../../../../src/assets/control.png";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsShieldLock } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaShopLock } from "react-icons/fa6";
import { PiBankDuotone } from "react-icons/pi";
import { MdOutlineManageAccounts, MdSupportAgent } from "react-icons/md";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = [
    { title: "HOME", icon: <FaHome size={22} />, routes: "Home" },
    {
      title: "DOCUMENT OCR SCANNER",
      icon: <FiEye size={22} />,
      routes: "DOCUMENT-ORC-SCANNER",
    },
    {
      title: "IDENTITY VERIFICATION",
      icon: <BsShieldLock size={22} />,
      routes: "IDENTITY-VERIFICATION",
    },
    {
      title: "BIOMETRIC VERIFICATION",
      icon: <BsPersonBoundingBox size={22} />,
      routes: "BIOMETRIC-VERIFICATION",
    },
    {
      title: "Retail & E-commerce",
      icon: <FaShopLock size={22} />,
      routes: "Retail-Ecommerce",
    },
    {
      title: "Financial Services",
      icon: <PiBankDuotone size={22} />,
      routes: "Financial-Services",
    },
    { title: "CONTACT", icon: <MdSupportAgent size={22} />, routes: "CONTACT" },
    {
      title: "Accounts",
      icon: <MdOutlineManageAccounts size={22} />,
      routes: "Accounts",
    },
  ];
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={open}
        />

        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <div
            className={`w-full bg-cyan-900 h-screen p-5 pt-8 relative transition-all duration-300 ${
              open ? "lg:w-72" : "lg:w-20"
            }`}
          >
            <img
              src={control}
              className={`absolute cursor-pointer top-9 right-3 z-50 w-8 border-2 border-cyan-900 rounded-full transform ${
                open ? "" : "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex items-center gap-x-4">
              <h1
                className={`text-white font-medium text-xl transition-transform transform origin-left ${
                  !open ? "scale-0" : ""
                }`}
              >
                E-KYC Verification
              </h1>
            </div>
            <ul className="pt-6">
  {Menus.map((Menu, index) => (
    <Link
      to={`/${Menu.routes}`}
      key={index}
      className={`flex items-center rounded-md p-2 cursor-pointer hover:bg-white hover:text-cyan-900 transition-colors ${
        location.pathname.substring(1) === Menu.routes
          ? "bg-white text-cyan-900"
          : ""
      } ${!open && "mt-2"}`}
    >
      {Menu.icon}
      <span className={`ml-2 ${!open && "hidden"}`}>
        {Menu.title}
      </span>
    </Link>
  ))}
</ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
