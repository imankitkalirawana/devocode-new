import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Announcements from "./Announcements";
import { isLoggedIn } from "../../utils/isLogged";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const { loggedIn } = isLoggedIn();
  const location = useLocation();
  const currentPath = location.pathname;
  if (!loggedIn) {
    localStorage.setItem("redirectPath", currentPath);
    window.location.href = "/auth/login";
  }
  return (
    <div className="relative mt-24 max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 items-start p-8">
      {/* main dashboard */}
      {/* menubar */}
      <div role="tablist" className="tabs tabs-bordered col-span-8">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab !bg-base-100 !border-none"
          aria-label="Dashboard"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content py-10">
          <Dashboard />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Subjects"
        />
        <div role="tabpanel" className="tab-content py-10">
          Subjects
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Announcements"
        />
        <div role="tabpanel" className="tab-content py-10">
          <Announcements />
        </div>
      </div>
      {/* Calendar */}
      <div className="hidden lg:block col-span-4 lg:col-span-5 lg:col-start-9">
        <Calendar />
      </div>
    </div>
  );
};
export default UserDashboard;
