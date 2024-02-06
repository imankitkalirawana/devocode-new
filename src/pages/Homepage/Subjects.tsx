import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../utils/config";
import { FiArrowRight } from "react-icons/fi";

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
    <>
      <div className="flex justify-between items-center">
        <h2>Subjects</h2>
        <Link to={"/resources/announcements"} className="btn btn-link link link-primary">
          View all <FiArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="skeleton w-40 h-40"></div>
            ))
          : subjects.slice(0, 4).map((subject) => (
              <div
                key={subject._id}
                className="stat bg-base-200 aspect-square flex justify-center items-center card"
              >
                <h2 className="stat-value text-2xl">{subject.code}</h2>
              </div>
            ))}
      </div>
    </>
  );
};

export default Subjects;
