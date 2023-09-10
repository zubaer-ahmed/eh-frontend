import { Outlet, Link, Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log();

  const navigate = useNavigate();
  return (
    // top-14 because TopNav's height is h-14
    <nav className="sticky top-14 w-20 h-full border-r bg-white space-y-8 shrink-0 z-10">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col h-full">
          <ul className="px-4 text-sm font-medium flex-1 space-y-2 py-4">
            <li>
              <Link
                to="/admin/profile"
                className={`${
                  location.pathname == "/admin/profile" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Profile
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className={`${
                  location.pathname == "/admin/users" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15a9.11 9.11 0 0 0-.18-1.81 8.53 8.53 0 0 0-.53-1.69 8.08 8.08 0 0 0-.83-1.5 8.73 8.73 0 0 0-1.1-1.33A8.27 8.27 0 0 0 17 7.54a8.08 8.08 0 0 0-1.53-.83L15 6.52V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.52l-.5.19a8.08 8.08 0 0 0-1.5.83 8.27 8.27 0 0 0-1.33 1.1A8.27 8.27 0 0 0 4.54 10a8.08 8.08 0 0 0-.83 1.53 9 9 0 0 0-.53 1.69A9.11 9.11 0 0 0 3 15v3H2v2h20v-2h-1zM5 15a7.33 7.33 0 0 1 .14-1.41 6.64 6.64 0 0 1 .41-1.31 7.15 7.15 0 0 1 .64-1.19 7.15 7.15 0 0 1 1.9-1.9A7.33 7.33 0 0 1 9 8.68V15h2V6h2v9h2V8.68a8.13 8.13 0 0 1 .91.51 7.09 7.09 0 0 1 1 .86 6.44 6.44 0 0 1 .85 1 6 6 0 0 1 .65 1.19 7.13 7.13 0 0 1 .41 1.31A7.33 7.33 0 0 1 19 15v3H5z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/services"
                className={`${
                  location.pathname == "/admin/services" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.21 17.32 7 16.8a2.13 2.13 0 1 0 1.17-2.93l1.28.53a1.58 1.58 0 0 1-1.22 2.92z"></path>
                    <path d="M12 2a10 10 0 0 0-10 9.34l5.38 2.21a2.31 2.31 0 0 1 .47-.24A2.62 2.62 0 0 1 9 13.1l2.44-3.56a3.8 3.8 0 1 1 3.8 3.8h-.08l-3.51 2.5a2.77 2.77 0 0 1-5.47.68l-3.77-1.6A10 10 0 1 0 12 2z"></path>
                    <path d="M17.79 9.5a2.53 2.53 0 1 0-2.53 2.5 2.54 2.54 0 0 0 2.53-2.5zm-4.42 0a1.9 1.9 0 1 1 1.9 1.91 1.9 1.9 0 0 1-1.9-1.92z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Services
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/jobs"
                className={`${
                  location.pathname == "/admin/jobs" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5H4z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Jobs
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/comments"
                className={`${
                  location.pathname == "/admin/comments" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z"></path>
                    <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Comments
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("jwt");
                  navigate("/logout");
                }}
                to="/logout"
                className={`${
                  location.pathname == "/logout" && "bg-gray-200"
                } relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-200 active:bg-gray-100 duration-150 group`}
              >
                <div>
                  <svg
                    fill="#FF0000"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                  </svg>
                </div>
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Sign Out
                </span>
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
