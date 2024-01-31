import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h2>Main Dashboard</h2>
          <button className="btn btn-link">
            Manage <FiArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-4 h-48 gap-4">
          <div className="bg-base-200 rounded-lg col-span-1 row-span-1 p-4 stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-base">Total Likes</div>
            <div className="stat-value text-primary text-lg">25.6K</div>
          </div>
          <div className="stat bg-primary rounded-lg col-span-1 row-span-1">
            <div className="stat-figure text-base-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-base-100">Page Views</div>
            <div className="stat-value text-base-100">2.6M</div>
          </div>
          <div className="rounded-lg col-span-2 row-span-2 relative overflow-hidden stat">
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
          <div className="col-span-2 bg-base-200 rounded-lg">
            <div className="diff aspect-[2/1] rounded-lg">
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
      </div>
    </>
  );
};

export default Dashboard;
