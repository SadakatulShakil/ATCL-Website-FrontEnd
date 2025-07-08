import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import atch from "../../assets/ATCL_Logo5.png";
import { toast } from "react-toastify";

// Utility to detect and close dropdowns on outside click
function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    }
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

const Nav = () => {
  // Menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // "service", "product", ""
  const [openSubDropdown, setOpenSubDropdown] = useState(""); // "product1", ""
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(""); // "service", "product", ""
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(""); // "product1", ""
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedAdminIn, setAdminLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdowns on outside click (desktop)
  const navRef = useRef(null);
  useOutsideClick(navRef, () => {
    setOpenDropdown("");
    setOpenSubDropdown("");
  });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const admintoken = localStorage.getItem("adminToken");
    setIsLoggedIn(!!token);
    setAdminLoggedIn(!!admintoken)
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    setIsLoggedIn(false);
    setAdminLoggedIn(false)
    toast.success("Logged out successfully");
    navigate("/users-login");
  };

  const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 transition bg-[#F15F22] hover:bg-opacity-40 active:bg-[#F15F22] shadow-md rounded-md px-2";
  const normal =
    "mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-black";

  // --- Dropdown for Service (desktop) ---
  const serviceDropdown = (
    <div className="relative">
      <button
        className="flex items-center gap-1 focus:outline-none"
        type="button"
        aria-haspopup="true"
        aria-expanded={openDropdown === "service"}
        onClick={() =>
          setOpenDropdown(openDropdown === "service" ? "" : "service")
        }
      >
        <span className="whitespace-nowrap">Service</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            openDropdown === "service" ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <ul
        className={`absolute left-0 z-20 mt-2 w-40 rounded-md bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-lg py-2 text-sm ${
          openDropdown === "service" ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/service1"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setOpenDropdown("")}
          >
            Service 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service2"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setOpenDropdown("")}
          >
            Service 2
          </NavLink>
        </li>
      </ul>
    </div>
  );

  // --- Dropdown for Product (desktop) ---
  const productDropdown = (
    <div className="relative">
      <button
        className="flex items-center gap-1 focus:outline-none"
        type="button"
        aria-haspopup="true"
        aria-expanded={openDropdown === "product"}
        onClick={() => {
          setOpenDropdown(openDropdown === "product" ? "" : "product");
          setOpenSubDropdown("");
        }}
      >
        <span className="whitespace-nowrap">Product</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            openDropdown === "product" ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <ul
        className={`absolute left-0 z-30 mt-2 w-48 rounded-md bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-lg py-2 text-sm ${
          openDropdown === "product" ? "block" : "hidden"
        }`}
      >
        <li className="relative">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() =>
              setOpenSubDropdown(
                openSubDropdown === "product1" ? "" : "product1"
              )
            }
          >
            Product 1
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                openSubDropdown === "product1" ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* Submenu for Product 1 */}
          <ul
            className={`absolute left-full top-0 z-40 mt-0 ml-0 w-40 rounded-md bg-gradient-to-r from-[#92468E] to-[#38235D] shadow-lg py-2 text-sm ${
              openSubDropdown === "product1" ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/product1/mobile"
                className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
                onClick={() => {
                  setOpenDropdown("");
                  setOpenSubDropdown("");
                }}
              >
                Mobile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product1/laptop"
                className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
                onClick={() => {
                  setOpenDropdown("");
                  setOpenSubDropdown("");
                }}
              >
                Laptop
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/product2"
            className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
            onClick={() => setOpenDropdown("")}
          >
            Product 2
          </NavLink>
        </li>
      </ul>
    </div>
  );

  // --- Desktop Nav Items ---
  const desktopNavItem = (
    <>
      <li className="nav-item p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/news-media">
          About
        </NavLink>
      </li>
      <li className="nav-item p-2">{serviceDropdown}</li>
      <li className="nav-item p-2">{productDropdown}</li>
      <li className="nav-item p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/about">
          Team
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/contact">
          Contact
        </NavLink>
      </li>
      {/* {!isLoggedIn ? (
        <li className="nav-item p-2">
          <NavLink to="/login" className={({ isActive }) => (isActive ? active : normal)}>
            Login
          </NavLink>
      
        </li>
        
      ) : (
        <>
          <li className="nav-item p-2">
            <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </li>
        </>
      )} */}




      {!isLoggedAdminIn ? (
        <li className="nav-item p-2">
          
          <NavLink to="/users-login" className={({ isActive }) => (isActive ? active : normal)}>
            User Login
          </NavLink>
        </li>
        
      ) : (
        <>
          <li className="nav-item p-2">
            <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item p-2">
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  // --- Mobile Nav Items ---
  const mobileNavItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/news-media"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
      </li>
      {/* Service mobile dropdown */}
      <li>
        <button
          className="flex items-center gap-1 w-full text-left focus:outline-none"
          onClick={() =>
            setMobileOpenDropdown(
              mobileOpenDropdown === "service" ? "" : "service"
            )
          }
          type="button"
        >
          Service
          <svg
            className={`w-4 h-4 transition-transform ${
              mobileOpenDropdown === "service" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul
          className={`${
            mobileOpenDropdown === "service" ? "block" : "hidden"
          } pl-4`}
        >
          <li>
            <NavLink
              to="/service1"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileOpenDropdown("");
              }}
            >
              Service 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service2"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileOpenDropdown("");
              }}
            >
              Service 2
            </NavLink>
          </li>
        </ul>
      </li>
      {/* Product mobile dropdown */}
      <li>
        <button
          className="flex items-center gap-1 w-full text-left focus:outline-none"
          onClick={() =>
            setMobileOpenDropdown(
              mobileOpenDropdown === "product" ? "" : "product"
            )
          }
          type="button"
        >
          Product
          <svg
            className={`w-4 h-4 transition-transform ${
              mobileOpenDropdown === "product" ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul
          className={`${
            mobileOpenDropdown === "product" ? "block" : "hidden"
          } pl-4`}
        >
          {/* Product 1 with nested mobile menu */}
          <li>
            <button
              className="flex items-center gap-1 w-full text-left focus:outline-none"
              onClick={() =>
                setMobileOpenSubDropdown(
                  mobileOpenSubDropdown === "product1" ? "" : "product1"
                )
              }
              type="button"
            >
              Product 1
              <svg
                className={`w-4 h-4 transition-transform ${
                  mobileOpenSubDropdown === "product1" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              className={`${
                mobileOpenSubDropdown === "product1" ? "block" : "hidden"
              } pl-4`}
            >
              <li>
                <NavLink
                  to="/product1/mobile"
                  className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileOpenDropdown("");
                    setMobileOpenSubDropdown("");
                  }}
                >
                  Mobile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product1/laptop"
                  className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileOpenDropdown("");
                    setMobileOpenSubDropdown("");
                  }}
                >
                  Laptop
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/product2"
              className="block px-3 py-1 text-white hover:bg-yellow-500 hover:text-black transition rounded"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileOpenDropdown("");
              }}
            >
              Product 2
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
        >
          Team
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? active : normal)}
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </NavLink>
      </li>
      {!isLoggedIn ? (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? active : normal)}
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? active : normal)}
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
              className="btn btn-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition w-full text-left"
            >
              Logout
            </button>
          </li>
        </>
      )}
      <li className="pt-4">
        <a
          className="flex items-center gap-2 rounded-xl bg-[#F15F22] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href="/"
        >
          Get A Quote
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50" ref={navRef}>
      <nav className="bg-[#f5f0f0] shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={atch} alt="ATCL Logo" className="h-12 w-auto" />
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">{desktopNavItem}</ul>
              <div className="ml-4">
                <a
                  className="flex items-center gap-2 rounded-xl bg-[#F15F22] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  href="/"
                >
                  Get A Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-black focus:outline-none p-2"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-2 p-4 bg-gradient-to-r from-[#92468E] to-[#38235D] text-white shadow-xl rounded-b-xl">
            {mobileNavItem}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;