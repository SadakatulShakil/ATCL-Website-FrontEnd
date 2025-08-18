import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import atch from "../../assets/brand_logo.png";
import { toast } from "react-toastify";

const Nav = () => {
  // Menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [isLoggedAdminIn, setAdminLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Check admin login status
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    setAdminLoggedIn(!!adminToken);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    setAdminLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/users-login");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Style classes
  const active = "text-white mx-1 font-medium bg-blue-600 shadow-md rounded-md px-3 py-1";
  const normal = "mx-1 text-black font-medium hover:text-blue-600 transition-colors";

  // Enhanced dropdown with hover functionality
  const Dropdown = ({ title, items, dropdownKey }) => {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setOpenDropdown(dropdownKey)}
        onMouseLeave={() => setOpenDropdown("")}
      >
        <button
          className={`flex items-center gap-1 ${normal}`}
          onClick={() => setOpenDropdown(openDropdown === dropdownKey ? "" : dropdownKey)}
        >
          {title}
          <svg
            className={`w-4 h-4 transition-transform ${
              openDropdown === dropdownKey ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul
          className={`absolute left-0 z-20 mt-2 w-40 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-2 ${
            openDropdown === dropdownKey ? "block" : "hidden"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-white transition"
                onClick={() => setOpenDropdown("")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Desktop Nav Items
  const desktopNavItem = (
    <>
      <li className="p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/">
          Home
        </NavLink>
      </li>
      <li className="p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/news-media">
          About
        </NavLink>
      </li>
      <li className="p-2">
        <Dropdown 
          title="Service" 
          dropdownKey="service"
          items={[
            { label: "Service 1", to: "/service1" },
            { label: "Service 2", to: "/service2" }
          ]}
        />
      </li>
      <li className="p-2">
        <Dropdown 
          title="Product" 
          dropdownKey="product"
          items={[
            { label: "Product 1", to: "/product1" },
            { label: "Product 2", to: "/product2" }
          ]}
        />
      </li>
      <li className="p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/about">
          Team
        </NavLink>
      </li>
      <li className="p-2">
        <NavLink className={({ isActive }) => (isActive ? active : normal)} to="/contact">
          Contact
        </NavLink>
      </li>
      {!isLoggedAdminIn ? (
        <li className="p-2">
          <a
            href="/users-login"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Admin Login
          </a>
        </li>
      ) : (
        <>
          <li className="p-2">
            <NavLink 
              className={({ isActive }) => (isActive ? active : normal)} 
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="p-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition"
            >
              Logout
            </button>
          </li>
        </>
      )}
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
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                  href="/quote"
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
                    />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="text-black focus:outline-none p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-2 p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            {/* Mobile menu items would go here */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
