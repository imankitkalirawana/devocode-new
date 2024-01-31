import { FiArrowRight } from "react-icons/fi";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative mt-24 max-w-7xl mx-auto grid grid-cols-12 gap-4 items-start">
      {/* main dashboard */}
      {/* menubar */}
      <div role="tablist" className="tabs tabs-bordered col-span-7">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
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
        <div role="tabpanel" className="tab-content p-10">
          Subjects
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="DLs"
        />
        <div role="tabpanel" className="tab-content p-10">
          DL's
        </div>
      </div>
      {/* Calendar */}
      <div className="col-span-5 col-start-8">
        <Calendar />
      </div>
      {/* Announcements */}
      <div className="col-span-7">
        <div className="flex justify-between items-center">
          <h2>Announcements</h2>
          <Link to={"/resources/announcements"} className="btn btn-link">
            View all <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Title</h2>
              <p className="leading-tight text-neutral-content">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="card-actions justify-end">
                <Link to={"/announcements:id"} className="btn btn-primary">
                  View <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Title</h2>
              <p className="leading-tight text-neutral-content">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  View <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
