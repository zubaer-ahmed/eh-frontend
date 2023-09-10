import { Link, Routes, Route, useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 grow ">
      <div className="text-4xl font-bold">Error: 404</div>
      <div className="text-2xl text-gray-500">Page Was Not Found</div>
      <div className="flex space-x-2">
        <button className="material-button" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="material-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  );
};
