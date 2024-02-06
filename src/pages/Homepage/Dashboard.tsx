import { FiArrowRight } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2>Main Dashboard</h2>
        <Link to={"/resources"} className="link btn link-primary btn-link">
          Manage <FiArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-base-200 card col-span-6 md:col-span-3 row-span-1 p-4 stat">
          <div className="stat-figure text-primary">
            <FaBook />
          </div>
          <div className="stat-title text-base">Subjects</div>
          <div className="stat-value text-primary text-lg">20+</div>
        </div>
        <div className="stat bg-primary card col-span-6 md:col-span-3 row-span-1">
          <div className="stat-figure text-base-100">
            <FaChartLine />
          </div>
          <div className="stat-title text-base-100">Views</div>
          <div className="stat-value text-base-100 text-lg">2.6K</div>
        </div>

        <div className="card col-span-12 sm:col-span-6 md:col-span-6 row-span-2 relative overflow-hidden stat aspect-[2/1] md:aspect-auto">
          <img
            src="/dashboard-bg.jpg"
            alt="dashboard-img"
            className="object-center object-cover w-full h-full brightness-50 absolute inset-0 -z-10"
          />
          <div className="stat-title text-white">Total Revenue</div>
          <div className="stat-value text-primary">2.6M</div>
          <div className="flex gap-2">
            <Link to={""} className="badge badge-primary">
              Subjects
            </Link>
            <Link to={""} className="badge badge-accent">
              DL's
            </Link>
          </div>

          <div className="stat-desc text-white">
            Get access to all your university things at one place
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-6 bg-base-200 card">
          <div className="diff aspect-[2/1] card">
            <div className="diff-item-1">
              <div className="bg-primary text-primary-content text-5xl font-black grid place-content-center">
                Devocode
              </div>
            </div>
            <div className="diff-item-2">
              <div className="bg-base-200 text-5xl font-black grid place-content-center">
                Devocode
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
