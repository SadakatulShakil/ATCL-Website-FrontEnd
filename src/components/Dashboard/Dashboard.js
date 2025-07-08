import React, { useState } from 'react';
import {
  FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaChevronDown
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {

 

     return (
     <div className="drawer lg:drawer-open">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  text-lg text-white ">
        {/* Page content here */}
        {/* <h1 className='text-red-900 text-5xl'> Dasboard</h1> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border-4    rounded-xl  ">
        <label
          htmlFor="dashboard-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full    bg-gradient-to-r from-[#e87c4e] via-[#F15F22] to-[#df571d]    text-lg text-white ">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard">My Dashboard</Link>
          </li>
          

          {/* <!-- Agrega más enlaces para la navegación lateral --> */}

          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">SERVICES</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-services">Add Services</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-services">Manage Services</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Product Category</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-product">Add Category</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-category">Manage Category</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Team Member </span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-team-member">Add Team Member  </Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-team-member">Manage Team Member</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">News</span>
              </summary>
              <div class="  p-1">
                 <li><Link to="/dashboard/add-news">Add News</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-news">Manage News</Link>
                </li>
              </div>
            </details>
          </li>
          <li>
            <details class="mb-2">
              <summary class=" p-3 rounded-lg cursor-pointer shadow">
                <span class="font-semibold text-white">Review</span>
              </summary>
              <div class="  p-1">
                {/* <p class="text-white">Add Doctor</p> */}
                <li><Link to="/dashboard/add-review">Add Review</Link></li>
              </div>
              <div class="  p-1">
                <li>
                  <Link to="/dashboard/manage-review">Manage Review</Link>
                </li>
              </div>
            </details>
          </li>
          
        </ul>
      </div>
    </div>
     );
};

export default Dashboard;