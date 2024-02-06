import axios from "axios";
import { useEffect, useState } from "react";
import API_BASE_URL from "../../../utils/config";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Subject {
  code: string;
  title: string;
  description: string;
  addedDate: Date;
  _id: string;
}

const Subjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      const { data } = await axios.get(
        `${API_BASE_URL}/api/resources/subjects`
      );
      setSubjects(data);
      setIsLoading(false);
    };

    fetchSubjects();
  }, []);

  return (
    <div className="mt-24 max-w-7xl mx-auto p-8">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>Subjects</li>
        </ul>
      </div>

      <input
        type="text"
        placeholder="Search subjects"
        name="search"
        className="input input-bordered w-full max-w-xs mt-8"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="skeleton w-full h-32"></div>
            ))
          : subjects.map((subject) => (
              <Link
                to=""
                className="card bg-base-200 rounded-lg px-8 py-6 relative"
                key={subject._id}
              >
                <div className="dropdown dropdown-end absolute right-3 top-3">
                  <div tabIndex={0} role="button" className="btn">
                    <IoEllipsisVertical size={"1.2em"} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Edit</a>
                    </li>
                    <li className="text-error">
                      <a>Delete</a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <h2 className="card-title">{subject.code}</h2>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {subject.title}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Subjects;
