import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Services",
      links: [
        { label: "Add Services", to: "/dashboard/add-services" },
        { label: "Manage Services", to: "/dashboard/manage-services" },
      ],
    },
    {
      title: "Product Category",
      links: [
        { label: "Add Category", to: "/dashboard/add-product" },
        { label: "Manage Category", to: "/dashboard/manage-category" },
      ],
    },
    {
      title: "Team Member",
      links: [
        { label: "Add Team Member", to: "/dashboard/add-team-member" },
        { label: "Manage Team Member", to: "/dashboard/manage-team-member" },
      ],
    },
    {
      title: "News",
      links: [
        { label: "Add News", to: "/dashboard/add-news" },
        { label: "Manage News", to: "/dashboard/manage-news" },
      ],
    },
    {
      title: "Review",
      links: [
        { label: "Add Review", to: "/dashboard/add-review" },
        { label: "Manage Review", to: "/dashboard/manage-review" },
      ],
    },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-50 min-h-screen p-4">
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-gradient-to-b from-blue-700 via-indigo-700 to-purple-700 text-white">
          <li className="mb-6 text-2xl font-bold tracking-wide">
            <Link to="/dashboard">My Dashboard</Link>
          </li>

          {menuItems.map((menu, i) => (
            <li key={i} className="mb-2">
              <details>
                <summary className="p-3 rounded-lg cursor-pointer shadow hover:bg-white/10">
                  <span className="font-semibold">{menu.title}</span>
                </summary>
                <div className="ml-3">
                  {menu.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        className={`block px-2 py-1 rounded-md transition ${
                          location.pathname === link.to
                            ? "bg-white/20 font-semibold"
                            : "hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
