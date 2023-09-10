import Icon from "@mui/material/Icon";

import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import * as React from "react";

export default () => {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    fetchJobs();
    return () => {};
  }, []);
  async function fetchJobs() {
    const fetchedArray = await (
      await fetch("http://localhost:8000/api/jobs/getJobs")
    ).json();
    setJobs(fetchedArray);
    console.log(fetchedArray);
  }

  return (
    <div className="w-full h-full flex flex-col p-4 space-y-4">
      <div className="bg-red-100 w-full h-16">
        <div id="ytb">Hello</div>
      </div>
      <section className="w-full h-full flex flex-col">
        {jobs.map((item, index) => (
          <div key={index}>
            <Link to={`/job/${item.id}`}>
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="flex w-full h-full justify-center bg-gray-300 rounded-lg shadow-lg p-4 mb-4 bg-opacity-50 hover:animate-pulse  space-x-4">
                  <img
                    src={"/noimage.svg"}
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div className="w-full h-full flex flex-col justify-center space-y-1">
                    <h3 className="text-xl font-bold text-blue-600">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-1">
                      <Icon fontSize="inherit">access_time</Icon>
                      <div>{new Date(item.appointmentDate).toTimeString()}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 space-x-1">
                      <PlaceIcon fontSize="inherit" />
                      <div>{item.location}</div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="rounded px-1 bg-green-500">4.6</div>
                      <div className="flex">
                        {Array(3)
                          .fill()
                          .map((_, index) => (
                            <Icon fontSize="inherit">star</Icon>
                          ))}
                        {Array(2)
                          .fill()
                          .map((_, index) => (
                            <Icon className="text-gray-400" fontSize="inherit">
                              star
                            </Icon>
                          ))}
                      </div>
                    </div>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};
