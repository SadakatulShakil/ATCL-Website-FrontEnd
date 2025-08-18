import React, { useEffect, useState } from "react";
import { FaCog, FaUsers, FaBox, FaNewspaper, FaStar } from "react-icons/fa";

const MyDashboard = () => {
  const [showAlert, setShowAlert] = useState(true);

  // Auto hide alert after 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      {/* Header / Breadcrumb */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-2">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="text-gray-500 font-medium">Dashboard</li>
          </ul>
        </div>
      </div>

      {/* Welcome Alert */}
      {showAlert && (
        <div className="alert bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg mb-8 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="badge bg-white text-green-600 border-none">Success</span>
            <span>WELCOME 🚀</span>
          </div>
          <button
            className="btn btn-sm btn-circle btn-ghost text-white"
            onClick={() => setShowAlert(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FaUsers size={28} />}
          value="10,468"
          label="Members Online"
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          icon={<FaBox size={28} />}
          value="2,345"
          label="Products Sold"
          color="from-purple-500 to-purple-600"
        />
        <StatCard
          icon={<FaNewspaper size={28} />}
          value="1,245"
          label="News Published"
          color="from-pink-500 to-pink-600"
        />
        <StatCard
          icon={<FaStar size={28} />}
          value="4.9"
          label="Average Reviews"
          color="from-indigo-400 to-indigo-600"
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, color }) => (
  <div
    className={`card bg-gradient-to-r ${color} shadow-xl text-white rounded-2xl`}
  >
    <div className="card-body relative">
      {/* Dropdown */}
      <div className="absolute top-4 right-4">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-none text-white"
          >
            <FaCog />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white text-gray-700 rounded-box w-40"
          >
            <li><button>Action</button></li>
            <li><button>Another action</button></li>
            <li><button>Something else</button></li>
          </ul>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white/20 rounded-full">{icon}</div>
        <div>
          <h4 className="text-3xl font-bold">{value}</h4>
          <p className="text-white text-opacity-90">{label}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MyDashboard;
