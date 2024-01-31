import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import API_BASE_URL from "../../utils/config";
import { FiArrowRight } from "react-icons/fi";

interface Subject {
  code: string;
  title: string;
  description: string;
  addedDate: Date;
  _id: string;
}

interface Announcement {
  title: string;
  description: string;
  addedDate: Date;
  _id: string;
}

const Resources = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/resources/subjects`
      );
      setSubjects(data);
      setIsLoading(false);
    };

    const fetchAnnouncements = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/announcements`);
        setAnnouncements(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
    fetchAnnouncements();
  }, []);

  return (
    <div className="mt-24 max-w-7xl m-auto grid lg:grid-cols-2 grid-rows-2 gap-4 gap-y-8 p-8">
      {/* Subjects */}
      <div className="card bg-base-200">
        <div className="card-body">
          <h2 className="card-title">Subjects</h2>
          <div className="p-4 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="skeleton w-40 h-40"></div>
                ))
              : subjects.slice(0, 3).map((subject) => (
                  <Link
                    to={`/resources/subjects/${subject.code}`}
                    key={subject._id}
                    className="stat bg-base-100 rounded-lg aspect-square flex justify-center items-center hover:scale-105 transition-all"
                  >
                    <div className="stat-value text-2xl">{subject.code}</div>
                  </Link>
                ))}
          </div>
          <div className="justify-end card-actions">
            <Link to="" className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="card bg-base-200">
        <div className="card-body justify-between">
          <h2 className="card-title">Announcements</h2>
          <div className="overflow-hidden">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="skeleton w-full h-10 my-2"></div>
              ))
            ) : (
              <ul className="divide-y divide-base-200 gap-2 flex flex-col">
                {announcements.slice(0, 3).map((announcement) => (
                  <Link
                    to={`/announcements/${announcement._id}`}
                    key={announcement._id}
                    className="p-4 bg-base-100 rounded-lg"
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
          <div className="justify-end card-actions">
            <Link to="" className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>
      </div>
      {/* DL's */}
      <div className="card">
        <div className="flex justify-between items-center">
          <h2>Upcoming DL's</h2>
          <button className="btn btn-link">
            Register <FiArrowRight />
          </button>
        </div>{" "}
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-value">Time</div>
            <div className="stat-title">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-value">Location</div>
            <div className="stat-title">SDMA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
