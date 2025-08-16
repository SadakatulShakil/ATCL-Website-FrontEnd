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
      <div className="bg-[#F4F4F6]">
  <div className="flex flex-col md:flex-row justify-between items-center px-10 lg:px-12 py-3 gap-8">
    
    {/* Contact Info Grid */}
    <div className="grid grid-cols-2 justify-items-center items-center gap-6">
      <div className="flex items-center font-bold text-black gap-2">
        <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl text-[#1466C6]" />
        <p className="text-[10px] lg:text-xs">Phone: +88 02 41024410</p>
      </div>
      <div className="flex items-center font-bold gap-2 text-black">
        <HiOutlineMailOpen className="text-[10px] lg:text-2xl text-[#1466C6]" />
        <p className="text-[10px] lg:text-xs">Email: atc@dhaka.net</p>
      </div>
    </div>

    {/* Social Icons Grid */}
    <div className="grid grid-cols-5 justify-items-center items-center gap-4">
      <CiFacebook className="text-[10px] lg:text-2xl text-[#1466C6]" />
      <FaTwitterSquare className="text-[10px] lg:text-2xl text-[#1466C6]" />
      <IoLogoInstagram className="text-[10px] lg:text-2xl text-[#1466C6]" />
      <FaYoutube className="text-[10px] lg:text-2xl text-[#1466C6]" />
      <IoLogoLinkedin className="text-[10px] lg:text-2xl text-[#1466C6]" />
    </div>

  </div>
</div>

    </div>
  );
};

export default TopNav;