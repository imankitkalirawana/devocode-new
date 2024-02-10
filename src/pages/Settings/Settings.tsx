import Profile from "../../component/Profile";
import Appearance from "./Appearance";
import Overview from "./Overview";
import { useLocation, useNavigate } from "react-router-dom";
import Security from "./Security";

const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mt-24 relative max-w-7xl mx-auto p-4">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Overview"
          defaultChecked={location.hash === ""}
          onClick={() => navigate("/settings")}
        />
        <div role="tabpanel" className="tab-content p-4 md:p-10">
          <Overview />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Profile"
          defaultChecked={location.hash === "#profile"}
          onClick={() => navigate("/settings#profile")}
        />
        <div role="tabpanel" className="tab-content p-4 md:p-10">
          <Profile />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Appearance"
          defaultChecked={location.hash === "#appearance"}
          onClick={() => navigate("/settings#appearance")}
        />
        <div role="tabpanel" className="tab-content p-4 md:p-10">
          <Appearance />
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Security"
          defaultChecked={location.hash === "#security"}
          onClick={() => navigate("/settings#security")}
        />
        <div role="tabpanel" className="tab-content p-4 md:p-10">
          <Security />
        </div>
      </div>
    </div>
  );
};

export default Settings;
