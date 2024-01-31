import { useEffect, useState } from "react";
import API_BASE_URL from "../../utils/config";
import axios from "axios";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../utils/isLogged";

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
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        username,
        password,
      });
      const { data } = response;
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("userId", data.userId);
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Login failed");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
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
  );
}
