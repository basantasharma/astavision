import React, { useEffect, useState } from "react";
import KYC from "./KYC";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className=" bg-white rounded-t-none p-2">
            <li>
              <Link>Networking</Link>
            </li>
            <li>
              <Link>System Administration</Link>
            </li>
            <li>
              <Link>Web Technology</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-[100vw] mx-auto md:px-20 px-4 bg-white text-black dark:bg-slate-800 dark:text-white sticky top-0 left-0 right-0 z-50 ${
        sticky
          ? "shadow-md bg-base-200 duration-200 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black dark:bg-slate-800 dark:text-white rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <svg
            className="h-10 w-10 md:h-14 md:w-14 fill-black dark:fill-white "
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="212.000000pt"
            height="164.000000pt"
            viewBox="0 0 212.000000 164.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)">
              <path d="M741 1568 c-16 -35 -79 -171 -141 -303 -62 -132 -130 -277 -151 -323 l-38 -83 145 3 146 3 77 170 c43 94 82 170 86 170 5 0 137 -268 295 -595 l288 -595 331 -3 331 -2 0 575 0 575 -130 0 -130 0 0 -439 0 -439 -106 -7 c-58 -4 -109 -4 -114 1 -5 5 -157 310 -338 679 l-330 670 -96 3 -97 3 -28 -63z" />
              <path d="M1850 1490 l0 -140 130 0 130 0 0 140 0 140 -130 0 -130 0 0 -140z" />
              <path d="M282 618 c-100 -217 -275 -594 -279 -600 -2 -5 183 -8 411 -8 l415 0 90 160 91 160 -62 142 c-34 79 -67 149 -74 157 -11 12 -19 1 -52 -70 -22 -46 -63 -132 -90 -192 l-51 -107 -135 0 -135 0 19 43 c10 23 52 114 93 202 41 88 74 161 73 161 0 1 -65 5 -143 9 l-142 7 -29 -64z" />
            </g>
          </svg>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* Login button */}
          <div className="">
            <KYC />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
