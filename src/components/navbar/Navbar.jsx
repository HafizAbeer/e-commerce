import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart || []); // Fallback to an empty array

  // navList Data
  const navList = (
    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {/* Login */}
      {!user ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>{user?.name}</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>{user?.name}</Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className=" cursor-pointer" onClick={logout}>
          Logout
        </li>
      )}

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>

      {/* Contact Us */}
      <li>
        <Link to={"/contactus"}>Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <nav style={{ backgroundColor: "#020617" }} className="sticky top-0 z-50">
      {/* main */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 relative">
        {/* left */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white text-2xl text-center">
              Abeer's Store
            </h2>
          </Link>
        </div>

        {/* Centered Navbar Links for Large Screens */}
        <div className="hidden lg:flex justify-center mb-4 lg:mb-0">
          {navList}
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Hamburger Button for Small Screens (Positioned on the Right) */}
        <div className="lg:hidden flex justify-end items-center mt-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-3 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hamburger Menu) */}
      <div
        className={`lg:hidden absolute top-0 right-0 w-full bg-black bg-opacity-50 z-10 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center">{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
