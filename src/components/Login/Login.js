import React, { useState } from "react";
import axios from "axios";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const res = await axios.post(
        "http://localhost:5050/api/auth/register",
        userData
      );
      alert(res.data.message);
      console.log(userData);
      setUserData({ name: "", email: "", password: "" }); // Clear form
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  //login///

  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const LoginhandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5050/api/auth/login",
        formData
      );

      if (res.data.token) {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.user)); // optional
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/dashboard");
        }, 50);
        console.log("Login successful, token:", res.data.token);
      } else {
        toast.error("Login failed: Token not received");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  const IconButton = ({ Icon }) => (
    <a
      href="/"
      className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-indigo-700 hover:bg-gray-100"
    >
      <Icon />
    </a>
  );
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-indigo-100">
        <div
          className={`relative w-full max-w-4xl h-[480px] bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-700 ease-in-out flex`}
        >
          {/* Sign In Form */}
          <div
            className={`w-1/2 p-10 absolute top-0 h-full transition-all duration-700 ease-in-out z-20 flex flex-col items-center justify-center bg-white ${
              isSignUp ? "translate-x-full opacity-0 z-10" : "opacity-100 z-20"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <div className="flex space-x-3 mb-4">
              <IconButton Icon={FaGooglePlusG} />
              <IconButton Icon={FaFacebookF} />
              <IconButton Icon={FaGithub} />
              <IconButton Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-3">or use your email password</span>
            {/* //login form  */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={LoginhandleChange}
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={LoginhandleChange}
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>
              <div className="text-sm text-right">
                <a href="/" className="text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#F16022] text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div
            className={`w-1/2 p-10 absolute top-0 h-full transition-all duration-700 ease-in-out z-10 flex flex-col items-center justify-center bg-white ${
              isSignUp ? "opacity-100 z-20 translate-x-full" : "opacity-0 z-10"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <div className="flex space-x-3 mb-4">
              <IconButton Icon={FaGooglePlusG} />
              <IconButton Icon={FaFacebookF} />
              <IconButton Icon={FaGithub} />
              <IconButton Icon={FaLinkedinIn} />
            </div>
            <span className="text-sm mb-3">
              or use your email for registration
            </span>
            <form className="space-y-5" onSubmit={register}>
              <div className="relative">
                <FaUser className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="relative">
                <FaLock className="absolute top-3.5 left-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="pl-10 w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F16022] text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Toggle Panel */}
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white p-10 transition-all duration-700 ease-in-out flex flex-col items-center justify-center z-30 ${
              isSignUp ? "left-0 rounded-r-3xl" : "left-1/2 rounded-l-3xl"
            }`}
          >
            <h1 className="text-2xl font-bold mb-4">
              {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
            </h1>
            <p className="text-sm text-center mb-4">
              {isSignUp
                ? "Enter your personal details to use all of site features"
                : "Register with your personal details to use all of site features"}
            </p>
            <button
              className="  p-4 bg-[#F16022] text-white py-2 rounded-md hover:bg-indigo-700 transition"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
