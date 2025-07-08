import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const TeamSlider = () => {
  const [teamData, setTeams] = useState([]);
  //const [loadingId, setLoadingId] = useState(null); // To show spinner on the specific delete button

  // Fetch services
  const fetchServices = () => {
    axios
      .get("http://localhost:5050/api/team/all")
      .then((res) => setTeams(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to fetch team.");
      });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="full-width-slider  px-4 py-10 bg-gray-50">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Team Members
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          What We Can Do For You
        </p>
      </div>

      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md text-center p-4">
              <div className="mb-4">
                <img
                  src={`http://localhost:5050/${member.image}`}
                  alt={member.name}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.membername}</h3>
              <p className="text-gray-600 mb-2">{member.memberdesignation}</p>
              <div className="flex justify-center gap-4 text-blue-600 mt-3">
                <a href="">
                  <FaPhone className="hover:text-green-600" />
                </a>
                <a href="">
                  <FaEnvelope className="hover:text-red-500" />
                </a>

                <a href="#">
                  <FaTwitter className="hover:text-sky-400" />
                </a>

                <a href="#">
                  <FaLinkedin className="hover:text-blue-800" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
