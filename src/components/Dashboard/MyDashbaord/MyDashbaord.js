import React from 'react';
import { FaCog } from "react-icons/fa";

const MyDashbaord = () => {
     return (
          <div>
               <div className="p-4">

      {/* Breadcrumb Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-2">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div>
          <div className="breadcrumbs text-sm">
            <ul>
              <li className="text-gray-500 font-medium">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      <div className="alert alert-success shadow-lg mb-6">
        <div>
          <span className="badge badge-success text-white">Success</span>
          <span>WELCOME .</span>
        </div>
        <button className="btn btn-sm btn-circle btn-ghost" onClick={() => document.querySelector('.alert')?.remove()}>
          ✕
        </button>
      </div>

      {/* Statistic Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-primary text-primary-content shadow-lg">
          <div className="card-body relative">
            
            {/* Dropdown */}
            <div className="absolute top-4 right-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-circle bg-transparent hover:bg-base-200 border-none text-white">
                  <FaCog />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-gray-700 rounded-box w-40">
                  <li><a>Action</a></li>
                  <li><a>Another action</a></li>
                  <li><a>Something else</a></li>
                </ul>
              </div>
            </div>

            {/* Card Content */}
            <h4 className="text-3xl font-bold">10,468</h4>
            <p className="text-white text-opacity-90">Members online</p>

            {/* Chart Placeholder */}
            <div className="mt-4 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-sm text-white">
              Chart Placeholder
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content shadow-lg">
          <div className="card-body relative">
            
            {/* Dropdown */}
            <div className="absolute top-4 right-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-circle bg-transparent hover:bg-base-200 border-none text-white">
                  <FaCog />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-gray-700 rounded-box w-40">
                  <li><a>Action</a></li>
                  <li><a>Another action</a></li>
                  <li><a>Something else</a></li>
                </ul>
              </div>
            </div>

            {/* Card Content */}
            <h4 className="text-3xl font-bold">10,468</h4>
            <p className="text-white text-opacity-90">Members online</p>

            {/* Chart Placeholder */}
            <div className="mt-4 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-sm text-white">
              Chart Placeholder
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content shadow-lg">
          <div className="card-body relative">
            
            {/* Dropdown */}
            <div className="absolute top-4 right-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-circle bg-transparent hover:bg-base-200 border-none text-white">
                  <FaCog />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-gray-700 rounded-box w-40">
                  <li><a>Action</a></li>
                  <li><a>Another action</a></li>
                  <li><a>Something else</a></li>
                </ul>
              </div>
            </div>

            {/* Card Content */}
            <h4 className="text-3xl font-bold">10,468</h4>
            <p className="text-white text-opacity-90">Members online</p>

            {/* Chart Placeholder */}
            <div className="mt-4 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-sm text-white">
              Chart Placeholder
            </div>
          </div>
        </div>
      </div>

    </div>
          </div>
     );
};

export default MyDashbaord;