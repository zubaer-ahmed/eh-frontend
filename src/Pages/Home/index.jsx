import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default () => {
  return (
    <section className="w-full h-full flex">
      <div className="mx-auto px-4 pt-12 flex flex-col text-gray-600 overflow-hidden md:px-8 md:flex-row">
        <div className="w-full md:w-1/2 md:order-1">
          {/* Replace with your image */}
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 space-y-5 px-8">
          <h1 className="text-4xl mt-24 text-gray-800 font-extrabold sm:text-5xl">
            Engineer<span className="text-red-700">Hut</span>
          </h1>
          <p>
            Future of Finding Services and Workforce Hiring at Your Footsteps
          </p>
          <div className="flex items-center sm:text-sm">
            <Link
              to="/login"
              className="flex items-center justify-center py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
