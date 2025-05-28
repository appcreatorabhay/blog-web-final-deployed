import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [show, setShow] = useState(false);
const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth state
    setIsAuthenticated(false);
    setProfile(null);

    // Remove token from localStorage
    localStorage.removeItem("jwt");

    // Optionally, navigate to home or login page
    navigate("/login");
  };

  return (
    <>
      <nav className="shadow-lg px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl">
            Fast<span className="text-blue-500">Blogs</span>
          </div>
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-blue-500">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-blue-500">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-blue-500">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <div className="hidden md:flex space-x-2">
         {profile?.role === "admin" && (
  <Link
    to="/dashboard"
    className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
  >
    DASHBOARD
  </Link>
)}


            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>

       {/* mobile menu */}
{show && (
  <div className="bg-white">
    <ul className="flex flex-col h-screen item-center justify-center space-y-3 md:hidden text-xl">
      <Link
        to="/"
        onClick={() => setShow(false)}
        className="hover:text-blue-500"
      >
        HOME
      </Link>
      <Link
        to="/blogs"
        onClick={() => setShow(false)}
        className="hover:text-blue-500"
      >
        BLOGS
      </Link>
      <Link
        to="/creators"
        onClick={() => setShow(false)}
        className="hover:text-blue-500"
      >
        CREATORS
      </Link>
      <Link
        to="/about"
        onClick={() => setShow(false)}
        className="hover:text-blue-500"
      >
        ABOUT
      </Link>
      <Link
        to="/contact"
        onClick={() => setShow(false)}
        className="hover:text-blue-500"
      >
        CONTACT
      </Link>

      {/* ✅ Admin-only Dashboard link */}
      {profile?.role === "admin" && (
        <Link
          to="/dashboard"
          onClick={() => setShow(false)}
          className="hover:text-blue-500"
        >
          DASHBOARD
        </Link>
      )}

      {/* Show login/logout button in mobile menu as well */}
      <div className="mt-4 px-4">
        {isAuthenticated ? (
          <button
            onClick={() => {
              handleLogout();
              setShow(false);
            }}
            className="w-full bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
          >
            LOGOUT
          </button>
        ) : (
          <Link
            to="/login"
            onClick={() => setShow(false)}
            className="w-full block text-center bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
          >
            LOGIN
          </Link>
        )}
      </div>
    </ul>
  </div>
)}
</nav>
</>
);
}

export default Navbar;
