import AdminPanel from "./Pages/AdminPanel";
import PostJob from "./Pages/PostJob";
import Worker from "./Pages/Worker";
import Customer from "./Pages/Customer";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import Profile from "./Pages/AdminPanel/Profile";
import Services from "./Pages/AdminPanel/Services";
import Jobs from "./Pages/AdminPanel/Jobs";
import Users from "./Pages/AdminPanel/Users";
import Comments from "./Pages/AdminPanel/Comments";
import Reviews from "./Pages/AdminPanel/Comments/Reviews";
import Suggestions from "./Pages/AdminPanel/Comments/Suggestions";
import Questions from "./Pages/AdminPanel/Comments/Questions";
import CommentById from "./Pages/AdminPanel/Comments/CommentById";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/SideBar";
import TopNav from "./Components/TopBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";

function App() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState("1");
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="customer" element={<Customer />} />
        <Route path="postJob" element={<PostJob />} />
        <Route path="worker" element={<Worker />} />
        <Route path="register" element={<Register />} />
        <Route
          path="admin"
          element={
            <div className="relative flex w-full h-full">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route
            path="profile
          "
            element={<AdminPanel />}
          />
          <Route path="" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="comments/:slug" element={<CommentById />} />
          <Route
            path="comments"
            element={
              <div className="relative flex flex-col w-full h-full overflow-auto">
                <Tabs
                  variant="fullWidth"
                  value={tabValue}
                  onChange={(event, newValue) => {
                    setTabValue(newValue);
                    navigate(
                      `/admin/comments/${
                        newValue == 1
                          ? "reviews"
                          : newValue == 2
                          ? "suggestions"
                          : "questions"
                      }`
                    );
                  }}
                  aria-label="icon label tabs example"
                >
                  <Tab iconPosition="start" value="1" label="Reviews" />
                  <Tab iconPosition="start" value="2" label="Suggestions" />
                  <Tab iconPosition="start" value="3" label="Questions" />
                </Tabs>{" "}
                <Outlet />
              </div>
            }
          >
            <Route path="" element={<Reviews />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="questions" element={<Questions />} />
          </Route>
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
