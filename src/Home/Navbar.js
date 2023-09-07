import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 h-20 ">
      <div className="md:w-[80%] mx-auto px-2 md:px-0">
        {/* -------logo------- */}
        <div className="md:flex md:justify-between items-center relative z-20 ">
          <img src="logo.png" alt="" />

          <div
            className={
              isOpen
                ? "absolute w-full md:w-auto md:relative text-center md:flex md:space-x-4 items-center text-white text-xl space-y-2 md:space-y-0 bg-gray-900  duration-500 -translate-x-[100%] md:translate-x-0 topnav"
                : "text-white md:relative md:flex md:flex-row md:judtify-between  md:text-xl md:w-auto md:space-x-4 space-y-2 md:space-y-0 translate-x-0 duration-500 opacity-100 absolute w-full flex-col justify-center items-center bg-gray-900"
            }
          >
            <p className="text-center bg-gray-900 ">
              <NavLink to="/">Home</NavLink>
            </p>
            <p className="text-center bg-gray-900 ">
              <NavLink to="/about">About</NavLink>
            </p>
            <p className="text-center bg-gray-900 ">
              <NavLink to="/services">Services</NavLink>
            </p>
            <p className="text-center bg-gray-900 ">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </p>

            <p className="text-center bg-gray-900 ">
              <NavLink to="/contact">Contact</NavLink>
            </p>
          </div>

          {isOpen ? (
            <RxHamburgerMenu
              size={25}
              className="text-white md:hidden absolute top-8 right-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <IoMdClose
              size={25}
              className="text-white duration-300 md:hidden absolute top-8 right-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {/* ------mobile nav */}
      </div>
    </nav>
  );
};

export default Navbar;
