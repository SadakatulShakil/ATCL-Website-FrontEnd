import React, { useState } from "react";

export default function HeaderNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#d9dde4] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://atcbd.net/">
              <img
                src="https://atcbd.net//public/images/ATCL_Logo5.png"
                alt="ATCL Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 items-center font-medium">
            <NavLink label="Home" href="https://atcbd.net/" />
            <NavLink label="About" href="https://atcbd.net/aboutus" />

            <Dropdown label="Service">
              <DropdownLink label="All Service" href="https://atcbd.net/service" />
              <DropdownLink label="Lab Establishment / Project Consultancy" href="https://atcbd.net/service/view/1" />
              <DropdownLink label="Sales with Technical Support" href="https://atcbd.net/service/view/2" />
              <DropdownLink label="Quick Delivery & Installation" href="https://atcbd.net/service/view/3" />
              <DropdownLink label="Comprehensive Training" href="https://atcbd.net/service/view/4" />
              <DropdownLink label="After Sales Support" href="https://atcbd.net/service/view/5" />
              <DropdownLink label="24-Hours Online Technical Support" href="https://atcbd.net/service/view/6" />
              <DropdownLink label="Technical Advice" href="https://atcbd.net/service/view/7" />
            </Dropdown>

            <Dropdown label="Product">
              <DropdownLink label="All Product" href="https://atcbd.net/product" />
              <Dropdown label="Land Surveying Instrument">
                <DropdownLink label="Equipment List" href="https://atcbd.net/product/subcategory/equipment-lis" />
              </Dropdown>
              <Dropdown label="Test & Measuring Instrument">
                <DropdownLink label="Gw Instek Products" href="https://atcbd.net/product/subcategory/gw-instek-products" />
                <DropdownLink label="Lutron Products" href="https://atcbd.net/product/subcategory/lutron-products2" />
                <DropdownLink label="Tektronix Products" href="https://atcbd.net/product/subcategory/tektronix-product" />
                <DropdownLink label="Anritsu Products" href="https://atcbd.net/product/subcategory/anritsu-products" />
              </Dropdown>
              <Dropdown label="CNC Machinery">
                <DropdownLink label="CNC Lathe Machine" href="https://atcbd.net/product/subcategory/cnc-lathe-machine" />
                <DropdownLink label="CNC Milling Machine" href="https://atcbd.net/product/subcategory/cnc-milling-machine" />
                <DropdownLink label="CNC Machining Center" href="https://atcbd.net/product/subcategory/cnc-machining-center" />
              </Dropdown>
              <Dropdown label="Communication Training Equipments">
                <DropdownLink label="Electtronica Veneta Products" href="https://atcbd.net/product/subcategory/electtronica-veneta-products" />
                <DropdownLink label="ETEK Products" href="https://atcbd.net/product/subcategory/etek-products" />
                <DropdownLink label="MAN & TEL" href="https://atcbd.net/product/subcategory/man-tel" />
              </Dropdown>
              <Dropdown label="Electrical Training Equipment">
                <DropdownLink label="Chungpa EMT (South Korea)" href="https://atcbd.net/product/subcategory/chungpa-et-south-korea-" />
                <DropdownLink label="Electrical Machines" href="https://atcbd.net/product/subcategory/woosun-electrical-machines" />
                <DropdownLink label="Power Generation, Distribution & Consumption" href="https://atcbd.net/product/subcategory/power-generation-distribution-consumption" />
              </Dropdown>
              <Dropdown label="Mechanical Heavy Machinery">
                <DropdownLink label="Lathe Machine" href="https://atcbd.net/product/subcategory/lathe-machine" />
                <DropdownLink label="Milling Machine" href="https://atcbd.net/product/subcategory/milling-machine" />
                <DropdownLink label="Drilling Machine" href="https://atcbd.net/product/subcategory/drilling-machine" />
                <DropdownLink label="Grinding Machine" href="https://atcbd.net/product/subcategory/grinding-machine" />
              </Dropdown>
              <Dropdown label="High Voltage Lab Equipment">
                <DropdownLink label="High Volt" href="https://atcbd.net/product/subcategory/high-vol" />
                <DropdownLink label="DeMEPA" href="https://atcbd.net/product/subcategory/demep" />
              </Dropdown>
              <Dropdown label="ATCL Assembled Products">
                <DropdownLink label="Assembled Products" href="https://atcbd.net/product/subcategory/assembled-product" />
              </Dropdown>
              <Dropdown label="Fuel Analysis Equipment">
                <DropdownLink label="Oxigen Bomb Calorimeter" href="https://atcbd.net/product/subcategory/oxigen-bomb-calorimete" />
              </Dropdown>
            </Dropdown>

            <NavLink label="Team" href="https://atcbd.net/team" />
            <NavLink label="Contact" href="https://atcbd.net/contact" />
            <a
              href="https://atcbd.net/contact"
              className="btn btn-primary btn-sm ml-3 shadow hover:scale-105 transition-transform"
            >
              Get A Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-square"
              aria-label="Toggle Menu"
            >
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-base-100 shadow rounded-lg py-4 px-6 space-y-2">
            <NavLink label="Home" href="https://atcbd.net/" />
            <NavLink label="About" href="https://atcbd.net/aboutus" />
            <NavLink label="Service" href="https://atcbd.net/service" />
            <NavLink label="Product" href="https://atcbd.net/product" />
            <NavLink label="Team" href="https://atcbd.net/team" />
            <NavLink label="Contact" href="https://atcbd.net/contact" />
            <a
              href="https://atcbd.net/contact"
              className="btn btn-primary btn-sm mt-2"
            >
              Get A Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded hover:text-primary transition-colors"
    >
      {label}
    </a>
  );
}

function Dropdown({ label, children }) {
  return (
    <div className="relative group dropdown">
      <button className="px-3 py-2 flex items-center gap-1 hover:text-primary">
        {label}
        <svg width="16" height="16" fill="currentColor">
          <path d="M4.646 6.646a.5.5 0 0 1 .708 0L8 9.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <ul className="absolute left-0 hidden group-hover:block bg-white shadow rounded-lg p-2 z-50 min-w-[220px]">
        {children}
      </ul>
    </div>
  );
}

function DropdownLink({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="block px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
