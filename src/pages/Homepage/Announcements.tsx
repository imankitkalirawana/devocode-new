import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Announcements = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2>Announcements</h2>
        <Link
          to={"/resources/announcements"}
          className="btn btn-link link link-primary"
        >
          View all <FiArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-12">
        <ul className="divide-y divide-base-200 gap-2 flex flex-col col-span-12">
          <Link to={`/announcements/`} className="p-4 bg-base-200 card">
            <div className="flex">
              <h3 className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, consectetur?
              </h3>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Announcements;
