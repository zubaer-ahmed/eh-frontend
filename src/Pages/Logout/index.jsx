import { Link, Routes, Route, useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 grow ">
      <div className="text-4xl font-bold">Successful</div>
      <div className="text-2xl text-gray-500">You have logged out</div>
      <div className="flex space-x-2">
        <button className="material-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};
