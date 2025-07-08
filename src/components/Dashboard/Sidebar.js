import { FaChartLine, FaTable, FaUser, FaCogs, FaHome, FaBars, FaPuzzlePiece, FaThLarge, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {


     const menuSections = [
  {
    title: null,
    items: [
      {
        label: "Dashboard",
        icon: "fa-dashboard",
        href: "index.html",
        active: true,
      },
    ],
  },
  {
    title: "UI elements",
    items: [
      {
        label: "Components",
        icon: "fa-laptop",
        children: [
          {
            label: "Buttons",
            icon: "fa-puzzle-piece",
            href: "ui-buttons.html",
          },
          {
            label: "Badges",
            icon: "fa-id-badge",
            href: "ui-badges.html",
          },
          {
            label: "Tabs",
            icon: "fa-bars",
            href: "ui-tabs.html",
          },
          {
            label: "Social Buttons",
            icon: "fa-share-square-o",
            href: "ui-social-buttons.html",
          },
          {
            label: "Cards",
            icon: "fa-id-card-o",
            href: "ui-cards.html",
          },
          {
            label: "Alerts",
            icon: "fa-exclamation-triangle",
            href: "ui-alerts.html",
          },
          {
            label: "Progress Bars",
            icon: "fa-spinner",
            href: "ui-progressbar.html",
          },
          {
            label: "Modals",
            icon: "fa-fire",
            href: "ui-modals.html",
          },
          {
            label: "Switches",
            icon: "fa-book",
            href: "ui-switches.html",
          },
          {
            label: "Grids",
            icon: "fa-th",
            href: "ui-grids.html",
          },
          {
            label: "Typography",
            icon: "fa-file-word-o",
            href: "ui-typgraphy.html",
          },
        ],
      },
      {
        label: "Tables",
        icon: "fa-table",
        children: [
          {
            label: "Basic Table",
            icon: "fa-table",
            href: "tables-basic.html",
          },
          {
            label: "Data Table",
            icon: "fa-table",
            href: "tables-data.html",
          },
        ],
      },
      {
        label: "Forms",
        icon: "fa-th",
        children: [
          {
            label: "Basic Form",
            icon: "fa-th",
            href: "forms-basic.html",
          },
          {
            label: "Advanced Form",
            icon: "fa-th",
            href: "forms-advanced.html",
          },
        ],
      },
    ],
  },
  {
    title: "Icons",
    items: [
      {
        label: "Icons",
        icon: "fa-tasks",
        children: [
          {
            label: "Font Awesome",
            icon: "fa-fort-awesome",
            href: "font-fontawesome.html",
          },
          {
            label: "Themefy Icons",
            icon: "ti-themify-logo",
            href: "font-themify.html",
          },
        ],
      },
      {
        label: "Widgets",
        icon: "ti-email",
        href: "widgets.html",
      },
      {
        label: "Charts",
        icon: "fa-bar-chart",
        children: [
          {
            label: "Chart JS",
            icon: "fa-line-chart",
            href: "charts-chartjs.html",
          },
          {
            label: "Flot Chart",
            icon: "fa-area-chart",
            href: "charts-flot.html",
          },
          {
            label: "Peity Chart",
            icon: "fa-pie-chart",
            href: "charts-peity.html",
          },
        ],
      },
      {
        label: "Maps",
        icon: "fa-area-chart",
        children: [
          {
            label: "Google Maps",
            icon: "fa-map-o",
            href: "maps-gmap.html",
          },
          {
            label: "Vector Maps",
            icon: "fa-street-view",
            href: "maps-vector.html",
          },
        ],
      },
    ],
  },
  {
    title: "Extras",
    items: [
      {
        label: "Pages",
        icon: "fa-glass",
        children: [
          {
            label: "Login",
            icon: "fa-sign-in",
            href: "page-login.html",
          },
          {
            label: "Register",
            icon: "fa-sign-in",
            href: "page-register.html",
          },
          {
            label: "Forget Pass",
            icon: "fa-paper-plane",
            href: "pages-forget.html",
          },
        ],
      },
    ],
  },
];
  return (
    <aside
      className="h-screen w-72 bg-base-100 border-r border-base-200 flex flex-col shadow-lg"
      aria-label="Sidebar"
    >
      <div className="flex items-center justify-center py-6 border-b border-base-200">
        <a href="./" className="block">
          <img src="images/logo.png" alt="Logo" className="h-8" />
        </a>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {menuSections.map(
          (section, idx) =>
            (!!section.title || section.items.length > 0) && (
              <div key={idx} className="mb-6">
                {section.title && (
                  <h3 className="menu-title text-xs uppercase tracking-wider text-gray-500/80 pl-3 mb-2 mt-4 font-bold">
                    {section.title}
                  </h3>
                )}
                <ul className="menu menu-vertical px-1">
                  {section.items.map((item, i) =>
                    item.children ? (
                      <li key={i}>
                        <details>
                          <summary className="flex items-center gap-2 font-medium">
                            <i className={`fa ${item.icon} w-5 text-base-400`} />
                            {item.label}
                          </summary>
                          <ul className="ml-6">
                            {item.children.map((sub, j) => (
                              <li key={j}>
                                <a
                                  href={sub.href}
                                  className="flex items-center py-1 gap-2 hover:text-primary"
                                >
                                  <i className={`fa ${sub.icon} w-4`} />
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ) : (
                      <li key={i}>
                        <a
                          href={item.href}
                          className={`flex items-center gap-2 py-2 rounded-lg ${
                            item.active
                              ? "bg-primary text-primary-content font-semibold"
                              : "hover:bg-base-200"
                          }`}
                        >
                          <i className={`fa ${item.icon} w-5`} />
                          {item.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
