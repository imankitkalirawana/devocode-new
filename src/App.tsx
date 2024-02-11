// App.js

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Landingpage/Homepage";
import Login from "./pages/Auth/Login";
import Resources from "./pages/Resources/Resources";
import { ToastContainer } from "react-toastify";
import Subjects from "./pages/Resources/Subjects/Subjects";
import UserDashboard from "./pages/Homepage/UserDashboard";
import Settings from "./pages/Settings/Settings";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Admin from "./pages/Admin/Admin";
import User from "./pages/Admin/User";

// Layout component with Navbar and Footer
const MainLayout = ({ children }: any) => (
  <>
    <Navbar />
    {children}
  </>
);

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="" element={<HomePage />} />
                  <Route path="dashboard" element={<UserDashboard />} />
                  <Route path="resources/*" element={<Outlet />}>
                    <Route path="" element={<Resources />} />
                    <Route path="subjects" element={<Subjects />} />
                  </Route>
                  {/* Profile */}
                  <Route path="settings/*" element={<Settings />} />
                  <Route path="admin/*" element={<Admin />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="users" element={<User />} />
                  </Route>

                  {/* <Footer /> */}
                </Routes>
              </MainLayout>
            }
          />
          <Route path="/auth/*" element={<Outlet />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer theme="dark" autoClose={5000} position="bottom-right" />
    </>
  );
}

export default App;
