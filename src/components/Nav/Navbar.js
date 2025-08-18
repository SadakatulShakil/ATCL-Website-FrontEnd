import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://hmexpoprivateltd.com/public/uploads/logo/1404865324_1620192210.webp"
            alt="HM Expo Private Limited"
            className="h-12 hover:opacity-90 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 items-center font-medium">
            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/"
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/page/about-us"
              >
                About Us
              </Link>
            </li>
            
            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/page/gallery"
              >
                Gallery
              </Link>
            </li>

            {/* Services Dropdown */}
            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1 flex items-center gap-1"
                onClick={() => toggleDropdown('services')}
              >
                Our Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 transition-all duration-300 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="py-1">
                  <Link 
                    to="/page/travel-agency" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Travel Agency
                  </Link>
                  <Link 
                    to="/page/tender-service" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Tender Service
                  </Link>
                  <Link 
                    to="/page/web-design-and-development" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Web Design & Dev
                  </Link>
                  <Link 
                    to="/page/software-development" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Software Development
                  </Link>
                  <Link 
                    to="/page/import-export" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Import Export
                  </Link>
                  <a 
                    href="https://www.hmweddings.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    HM WEDDINGS
                  </a>
                  <Link 
                    to="/page/visa-air-ticketing" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Visa Air Ticketing
                  </Link>
                  <a 
                    href="http://www.taatka.com.bd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Taatka Ltd
                  </a>
                  <Link 
                    to="/page/recruiting-agency" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Recruiting Agency
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/page/contact-us"
              >
                Contact Us
              </Link>
            </li>
            
            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/page/faq"
              >
                FAQ
              </Link>
            </li>
            
            <li>
              <Link 
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 py-2 px-1" 
                to="/page/news"
              >
                News
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleDrawer} 
          className="block lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
          <div 
            className="fixed top-0 left-0 w-80 bg-white h-full shadow-xl p-6 z-50 overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <img
                src="https://hmexpoprivateltd.com/public/uploads/logo/1404865324_1620192210.webp"
                alt="HM Expo Private Limited"
                className="h-10"
              />
              <button 
                onClick={toggleDrawer} 
                className="text-gray-500 hover:text-red-500 text-3xl transition-colors"
              >
                &times;
              </button>
            </div>
            
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/page/about-us" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/page/gallery" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              
              {/* Services Dropdown in Mobile */}
              <li>
                <button 
                  onClick={() => toggleDropdown('mobileServices')}
                  className="w-full flex justify-between items-center py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  <span>Our Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'mobileServices' && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <Link 
                        to="/page/travel-agency" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Travel Agency
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/page/tender-service" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Tender Service
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/page/web-design-and-development" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Web Design & Dev
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/page/software-development" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/page/import-export" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Import Export
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="https://www.hmweddings.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        HM WEDDINGS
                      </a>
                    </li>
                    <li>
                      <Link 
                        to="/page/visa-air-ticketing" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Visa Air Ticketing
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="http://www.taatka.com.bd" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Taatka Ltd
                      </a>
                    </li>
                    <li>
                      <Link 
                        to="/page/recruiting-agency" 
                        onClick={toggleDrawer}
                        className="block py-2 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Recruiting Agency
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              <li>
                <Link 
                  to="/page/contact-us" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/page/faq" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/page/news" 
                  onClick={toggleDrawer}
                  className="block py-3 px-4 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;