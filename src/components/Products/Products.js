import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const fetchServices = () => {
    axios.get("https://atcl-website-backend.onrender.com//api/categories/all")
      .then(res => {
        console.log("Fetched categories:", res.data);
        setCategories(res.data);
      })
      .catch(err => {
        if (err.response) {
          console.error("Error response:", err.response.status, err.response.data);
        } else if (err.request) {
          console.error("No response received:", err.request);
        } else {
          console.error("Axios setup error:", err.message);
        }
        toast.error("Failed to fetch categories.");
      });
  };
  

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="bg-gray-50">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Our Products
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          WHAT TYPE OF PRODUCT WE CAN OFFER YOU
        </p>
      </div>

      <div className="w-full px-4">
        <div className="flex flex-wrap justify-center gap-2 pb-6 text-center">
          {categories.map((category) => (
            <button
              key={category._id}
              // onClick={() => handleCategoryClick(category._id)}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mb-1"
            >
              {category.categoryname}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
