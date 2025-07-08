import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare  } from "react-icons/fa";
import { IoLogoInstagram   } from "react-icons/io";
import { FaYoutube    } from "react-icons/fa";
import { IoLogoLinkedin     } from "react-icons/io";
// import logo from "../../assets/logo.png";
const TopNav = () => {
  return (
    <div>
      <div className="bg-[#F15F22]">
  <div className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-12 py-3 gap-8">
    
    {/* Contact Info Grid */}
    <div className="grid grid-cols-2 justify-items-center items-center gap-6">
      <div className="flex items-center font-bold text-white gap-2">
        <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl text-white" />
        <p className="text-[10px] lg:text-xs">Phone: +88 02 41024410</p>
      </div>
      <div className="flex items-center font-bold gap-2 text-white">
        <HiOutlineMailOpen className="text-[10px] lg:text-2xl" />
        <p className="text-[10px] lg:text-xs">Email: atc@dhaka.net</p>
      </div>
    </div>

    {/* Social Icons Grid */}
    <div className="grid grid-cols-5 justify-items-center items-center gap-4">
      <CiFacebook className="text-[10px] lg:text-2xl text-white" />
      <FaTwitterSquare className="text-[10px] lg:text-2xl text-white" />
      <IoLogoInstagram className="text-[10px] lg:text-2xl text-white" />
      <FaYoutube className="text-[10px] lg:text-2xl text-white" />
      <IoLogoLinkedin className="text-[10px] lg:text-2xl text-white" />
    </div>

  </div>
</div>

    </div>
  );
};

export default TopNav;
