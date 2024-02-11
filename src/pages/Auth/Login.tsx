import { useEffect, useState } from "react";
import API_BASE_URL from "../../utils/config";
import axios from "axios";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../utils/isLogged";
import ForgotPassword from "../../component/svg/ForgotPassword";

export default function SignInPage() {
  const { loggedIn } = isLoggedIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/login`, {
        username,
        password,
      });
      const { data } = response;
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("userId", data.userId);
        if (localStorage.getItem("redirectPath")) {
          window.location.href = localStorage.getItem("redirectPath") as string;
        } else {
          window.location.href = "/dashboard";
        }
        localStorage.removeItem("redirectPath");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Login failed");
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 p-4">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input input-bordered"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
                <label
                  className="label-text-alt link link-hover"
                  htmlFor="my_modal_7"
                >
                  Forgot password
                </label>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <form className="modal-box max-w-96">
          <div className="max-w-40 mx-auto flex mb-8">
            <ForgotPassword />
          </div>
          <div className="flex flex-col gap-4">
            <div className="label">
              <span className="label-text">Enter your email address</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            <button className="btn btn-primary">Send Reset Link</button>
          </div>
        </form>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}
