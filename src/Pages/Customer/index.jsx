import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import * as React from "react";

export default () => {
  const navigate = useNavigate();
  const [services, setServices] = React.useState([]);
  React.useEffect(() => {
    fetchservices();
    return () => {};
  }, []);
  async function fetchservices() {
    const fetchedArray = await (
      await fetch("http://localhost:8000/api/workers/getWorkers")
    ).json();
    setServices(fetchedArray);
    console.log(fetchedArray);
  }

  return (
    <section className="w-full h-full flex">
      <div className="flex flex-col p-4">
        <div
          className="material-button self-start m-2"
          onClick={() => navigate("/postJob")}
        >
          Post Job
        </div>
        <h1 className="text-xl font-bold text-gray-800 my-2">
          Services Available in Your Area
        </h1>

        {(services.length > 0 &&
          services.map((service, index) => (
            <div
              className="flex  p-2 border bg-gray-50 shadow space-x-2 px-2 py-4"
              key={index}
            >
              <img src="/noimage.svg" className="h-8 w-8" alt="Vite logo" />
              <div className="flex flex-col w-full" key={service._id}>
                <h1 className="text-sm font-bold text-gray-700">
                  {service.employer}
                </h1>
                <p className="text-gray-700">{service?.text}</p>
                <div className="text-xs mt-2 text-blue-500 ">
                  <a href="#" className="underline">
                    Like
                  </a>{" "}
                  <a href="#" className="underline">
                    Reply
                  </a>{" "}
                  <a href="#" className="underline">
                    Edit
                  </a>{" "}
                  <a href="#" className="underline">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))) ||
          "No Services Available"}
      </div>
    </section>
  );
};
