import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart || []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <nav
      style={{ backgroundColor: "#020617" }}
      className="border-b sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <h2 className="font-bold text-white text-2xl">Abeer's Store</h2>
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 lg:hidden"
          >
            <svg
              className={`h-6 w-6 transition-transform ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to={"/"}
              className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={"/allproduct"}
              className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              All Product
            </Link>

            {!user && (
              <>
                <Link
                  to={"/signup"}
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
                <Link
                  to={"/login"}
                  className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </>
            )}

            {user?.role === "user" && (
              <Link
                to={"/user-dashboard"}
                className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {user?.name}
              </Link>
            )}

            {user?.role === "admin" && (
              <Link
                to={"/admin-dashboard"}
                className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {user?.name}
              </Link>
            )}

            {user && (
              <button
                onClick={logout}
                className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Logout
              </button>
            )}

            <Link
              to={"/cart"}
              className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Cart ({cartItems.length})
            </Link>
            <Link
              to={"/contactus"}
              className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-1">
          <Link
            to={"/"}
            className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to={"/allproduct"}
            className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            All Product
          </Link>

          {!user && (
            <>
              <Link
                to={"/signup"}
                className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Signup
              </Link>
              <Link
                to={"/login"}
                className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            </>
          )}

          {user?.role === "user" && (
            <Link
              to={"/user-dashboard"}
              className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {user?.name}
            </Link>
          )}

          {user?.role === "admin" && (
            <Link
              to={"/admin-dashboard"}
              className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {user?.name}
            </Link>
          )}

          {user && (
            <button
              onClick={logout}
              className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
            >
              Logout
            </button>
          )}

          <Link
            to={"/cart"}
            className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Cart ({cartItems.length})
          </Link>
          <Link
            to={"/contactus"}
            className="block text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>

          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const user = JSON.parse(localStorage.getItem("users"));

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear("users");
//     navigate("/login");
//   };

//   const cartItems = useSelector((state) => state.cart || []); // Fallback to an empty array

//   // navList Data
//   const navList = (
//     <ul className="flex space-x-2 text-white font-medium text-md px-5 ">
//       {/* Home */}
//       <li>
//         <Link to={"/"}>Home</Link>
//       </li>

//       {/* All Product */}
//       <li>
//         <Link to={"/allproduct"}>All Product</Link>
//       </li>

//       {/* Signup */}
//       {!user ? (
//         <li>
//           <Link to={"/signup"}>Signup</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* Login */}

//       {!user ? (
//         <li>
//           <Link to={"/login"}>Login</Link>
//         </li>
//       ) : (
//         ""
//       )}

//       {/* User */}
//       {user?.role === "user" && (
//         <li>
//           <Link to={"/user-dashboard"}>{user?.name}</Link>
//         </li>
//       )}

//       {/* Admin */}
//       {user?.role === "admin" && (
//         <li>
//           <Link to={"/admin-dashboard"}>{user?.name}</Link>
//         </li>
//       )}

//       {/* logout */}
//       {user && (
//         <li className=" cursor-pointer" onClick={logout}>
//           Logout
//         </li>
//       )}

//       {/* Cart */}
//       <li>
//         <Link to={"/cart"}>Cart({cartItems.length})</Link>
//       </li>
//       <li>
//         <Link to={"/contactus"}>Contact Us</Link>
//       </li>
//     </ul>
//   );
//   return (
//     <nav style={{ backgroundColor: "#020617" }} className="sticky top-0">
//       {/* main  */}
//       <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//         {/* left  */}
//         <div className="left py-3 lg:py-0">
//           <Link to={"/"}>
//             <h2 className=" font-bold text-white text-2xl text-center">
//               Abeer's Store
//             </h2>
//           </Link>
//         </div>

//         {/* right  */}
//         <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

//         {/* Search Bar  */}
//         <SearchBar />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
