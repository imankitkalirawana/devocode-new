import axios from "axios";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../utils/config";

interface Announcement {
  title: string;
  description: string;
  addedDate: Date;
  _id: string;
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="skeleton w-full h-10 my-2"></div>
          ))
        ) : (
          <ul className="divide-y divide-base-200 gap-2 flex flex-col col-span-12">
            {announcements.slice(0, 3).map((announcement) => (
              <Link
                to={`/announcements/${announcement._id}`}
                key={announcement._id}
                className="p-4 bg-base-200 card"
              >
                <div className="flex">
                  <h3 className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                    {announcement.title}
                  </h3>
                </div>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Announcements;
