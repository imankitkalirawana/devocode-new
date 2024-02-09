import { PaperClipIcon } from "@heroicons/react/16/solid";
import { isLoggedIn } from "../../utils/isLogged";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../utils/config";

type User = {
  _id: string;
  firstname: string;
  lastname: string;
  profile: string;
  username: string;
  email: string;
  pan: string;
  aadhar: string;
  phone: string;
  about: string;
  role: string;
  country: string;
  state: string;
  city: string;
  streetaddress: string;
  zip: string;
  createdat: string;
  updatedat: string;
  theme: string;
};

const Overview = () => {
  const { loggedIn } = isLoggedIn();
  const location = useLocation();
  const currentPath = location.pathname;
  if (!loggedIn) {
    localStorage.setItem("redirectPath", currentPath);
    window.location.href = "/auth/login";
  }
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/profile`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        const { data } = response;
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-4 flex sm:px-0">
        <div className="avatar placeholder mr-4">
          <div className="bg-neutral text-neutral-content rounded-full w-12 h-12">
            <span>AK</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold leading-7 ">
            Profile Overview
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 ">
            Personal details and documents.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <ul className="">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Full name</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.firstname} {user.lastname}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Username</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.username}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Email address</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Phone</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.phone}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">About</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.about}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Address</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              {user.streetaddress}, {user.city}, {user.state}, {user.country},{" "}
              {user.zip}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Attachments</dt>
            <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
              <ul role="list" className="rounded-md">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />

                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">pan_card.pdf</span>
                      <span className="flex-shrink-0 ">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="btn btn-sm btn-ghost">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />

                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        aadhaar_card.pdf
                      </span>
                      <span className="flex-shrink-0 ">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="btn btn-sm btn-ghost">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
