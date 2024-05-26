import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      {/* <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"> */}
      <nav className="gradient sticky w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              className="h-16 w-16 fill-white "
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
            <div className="flex flex-col self-baseline align-baseline text-2xl font-semibold whitespace-nowrap dark:text-blue-400">
              <span className="">Astavision</span>
              <span className="">Infosys</span>
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/kycform">
              <button
                type="button"
                className=" text-white font-bold border-2 border-blue-400 bg-blue-400 hover:bg-blue-800 focus:ring-2   focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-400 dark:hover:bg-transparent dark:hover:border-blue-400 dark:hover:text-blue-400 dark:focus:ring-blue-400"
              >
                FILL KYC
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  bg-blue-400 rounded md:bg-transparent md:text-blue-400 md:p-0 md:dark:text-blue-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3   rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
