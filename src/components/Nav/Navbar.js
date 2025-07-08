import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

       const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
     return (
          <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://hmexpoprivateltd.com/public/uploads/logo/1404865324_1620192210.webp"
            alt="HM Expo Private Limited"
            className="h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-6 items-center font-medium">
            <li><Link className="hover:text-primary" to="/">Home</Link></li>
            <li><Link className="hover:text-primary" to="/page/about-us">About Us</Link></li>
            <li><Link className="hover:text-primary" to="/page/gallery">Gallery</Link></li>

            {/* Dropdown */}
            <li className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="hover:text-primary flex items-center gap-1 cursor-pointer">
                Our Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 8l4 4 4-4" />
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 z-50">
                <li><Link to="/page/travel-agency">Travel Agency</Link></li>
                <li><Link to="/page/tender-service">Tender Service</Link></li>
                <li><Link to="/page/web-design-and-development">Web Design & Dev</Link></li>
                <li><Link to="/page/software-development">Software Development</Link></li>
                <li><Link to="/page/import-export">Import Export</Link></li>
                <li><a href="https://www.hmweddings.com" target="_blank" rel="noopener noreferrer">HM WEDDINGS</a></li>
                <li><Link to="/page/visa-air-ticketing">Visa Air Ticketing</Link></li>
                <li><a href="http://www.taatka.com.bd" target="_blank" rel="noopener noreferrer">Taatka Ltd</a></li>
                <li><Link to="/page/recruiting-agency">Recruiting Agency</Link></li>
              </ul>
            </li>

            <li><Link className="hover:text-primary" to="/page/contact-us">Contact Us</Link></li>
            <li><Link className="hover:text-primary" to="/page/faq">FAQ</Link></li>
            <li><Link className="hover:text-primary" to="/page/news">News</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button: visible on screens <1024px */}
<button onClick={toggleDrawer} className="block lg:hidden btn btn-square btn-ghost">
  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleDrawer}>
          <div className="fixed top-0 left-0 w-64 bg-white h-full shadow-lg p-6 z-50" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDrawer} className="text-red-500 text-2xl font-bold mb-4">×</button>
            <ul className="menu space-y-2">
              <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
              <li><Link to="/page/about-us" onClick={toggleDrawer}>About Us</Link></li>
              <li><Link to="/page/gallery" onClick={toggleDrawer}>Gallery</Link></li>
              <li><Link to="/page/travel-agency" onClick={toggleDrawer}>Travel Agency</Link></li>
              <li><Link to="/page/tender-service" onClick={toggleDrawer}>Tender Service</Link></li>
              <li><Link to="/page/web-design-and-development" onClick={toggleDrawer}>Web Design & Dev</Link></li>
              <li><Link to="/page/software-development" onClick={toggleDrawer}>Software Development</Link></li>
              <li><Link to="/page/import-export" onClick={toggleDrawer}>Import Export</Link></li>
              <li><a href="https://www.hmweddings.com" target="_blank" rel="noopener noreferrer">HM WEDDINGS</a></li>
              <li><Link to="/page/visa-air-ticketing" onClick={toggleDrawer}>Visa Air Ticketing</Link></li>
              <li><a href="http://www.taatka.com.bd" target="_blank" rel="noopener noreferrer">Taatka Ltd</a></li>
              <li><Link to="/page/recruiting-agency" onClick={toggleDrawer}>Recruiting Agency</Link></li>
              <li><Link to="/page/contact-us" onClick={toggleDrawer}>Contact Us</Link></li>
              <li><Link to="/page/faq" onClick={toggleDrawer}>FAQ</Link></li>
              <li><Link to="/page/news" onClick={toggleDrawer}>News</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
     );
};

export default Navbar;