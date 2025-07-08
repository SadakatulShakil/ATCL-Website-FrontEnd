import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios
      // .get(`${process.env.REACT_APP_API_URL}/api/services/all`)
      .get("http://localhost:5050/api/services/all")
      .then((res) => setServices(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to fetch services.");
      });
  };

  return (
    <div className="py-8 bg-white">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Our Services
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          WHAT SERVICE WE CAN OFFER YOU
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        {services.map((service) => (
          <div key={service._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="custom-card text-center shadow-md">
              <div className="mb-4">
                <img
                  src={`http://localhost:5050/${service.image}`}
                  alt={service.name}
                  className="mx-auto h-16 w-16"
                />
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">
                  <a
                    href={`/service/view/${service._id}`}
                    className="hover:underline"
                  >
                    {service.servicename}
                  </a>
                </h5>
                <p className="text-sm">
                  {service.servicedescription?.slice(0, 150)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
