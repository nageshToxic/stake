import React from "react";

import { Link } from "react-router-dom";
import mini from "/logo-bg.png";

import { useAuth } from "../context/AuthContext";

const Navbar = ({ ideaBtn }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav
      onsc
      className="bg-blue-200 border-gray-200 px-2 sm:px-4 py-2.5 shadow-xl  drop-shadow-lg z-10 sticky w-full "
    >
      <div className="w-[90%] m-auto ">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-1.5">
          <Link to="/" className="flex items-center">
            <img src={mini} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span
              style={{ fontFamily: "Poppins" }}
              className="self-center text-xl font-semibold whitespace-nowrap "
            >
              Stake Place
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <span className=" font-semibold whitespace-nowrap text-2xl ">Welcome Buddy ッ </span>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {ideaBtn && (
              <Link to={"/idea"}>
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center "
                >
                  Submit your Idea 💡
                </button>
              </Link>
            )}
            <button
              onClick={handleLogout}
              type="button"
              class="text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center ml-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
