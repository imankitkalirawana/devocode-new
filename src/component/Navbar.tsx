import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/isLogged";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const Navbar = () => {
  const { loggedIn } = isLoggedIn();
  // handleThemeChange (to local storage)
  const handleThemeChange = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme !== "light";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar bg-base-100 fixed z-30 text-content top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              htmlFor="my-drawer"
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side" tabIndex={0}>
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Theme</summary>
                    <ul className="h-80 overflow-y-scroll">
                      {themes.map((theme) => (
                        <li key={theme}>
                          <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            value={theme}
                            aria-label={
                              theme.charAt(0).toUpperCase() + theme.slice(1)
                            }
                            onChange={() => handleThemeChange(theme)}
                          />
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            DevoCode
          </Link>
        </div>
        <div className="hidden lg:block navbar-center">
          <div className="flex items-stretch">
            <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link
              to={"/resources"}
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Resources
            </Link>
            <a
              href="https://divinelydeveloper.me"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              About
            </a>
            <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block dropdown mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost m-1 flex flex-nowrap"
            >
              Theme
              <svg
                width="12px"
                height="12px"
                className="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 h-80 overflow-y-scroll"
            >
              {themes.map((theme) => (
                <li key={theme}>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className={`theme-controller btn btn-sm btn-block justify-start btn-ghost`}
                    value={theme}
                    aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                    onChange={() => handleThemeChange(theme)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block form-control mr-4">
            <input
              type="text"
              placeholder="Search"
              className="input w-30 md:w-auto rounded-full h-10 bg-base-200"
            />
          </div>
          {loggedIn ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar placeholder mr-4"
              >
                <div className="bg-neutral text-neutral-content rounded-full w-12">
                  <span>AK</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <Link to="">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-error">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary btn-sm rounded-btn mr-4"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
