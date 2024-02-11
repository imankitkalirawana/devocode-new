import { Link, useLocation } from "react-router-dom";

const sidebarContent = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Users",
    href: "/admin/users",
  },
  {
    name: "NGO's",
    href: "/admin/company",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="md:px-5 py-8 col-span-4 md:col-span-2 lg:col-span-3 mx-auto md:mx-0">
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 rounded-box flex md:flex-col"
      >
        {sidebarContent.map((item, i) => {
          return (
            <li key={i}>
              <Link
                to={item.href}
                className={`flex items-center justify-start btn-sm sm:btn-md btn btn-${
                  location.pathname.includes(item.href) ? "primary" : "ghost"
                } md:px-6 w-full`}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
