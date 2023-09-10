import { Link, Routes, Route, useNavigate } from "react-router-dom";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export default () => {
  const [comments, setComments] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchComment();
    return () => {};
  }, []);
  async function fetchComment() {
    const fetchedJobs = await (
      await fetch("http://localhost:8000/api/comments/getComments/review")
    ).json();
    setComments(fetchedJobs);
  }
  return (
    <>
      <div className="flex flex-col w-full h-full items-center overflow-x-auto p-4">
        <div className="flex space-x-2 w-full">
          <div className=" material-button flex items-center">
            <AddIcon />
            Add
          </div>
          <div className="material-button">
            <DeleteIcon />
            Delete
          </div>
        </div>
        <div className="w-full mt-6 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6"></th>
                <th className="py-3 px-6">Job</th>
                <th className="py-3 px-6">Customer</th>
                <th className="py-3 px-6">Comment</th>
                <th className="py-3 px-6">Replies</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {comments &&
                comments.map((item, idx) => (
                  <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                    <td className="px-6 py-4 whitespace-nowrap ">
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                      {item.sourceJobId?._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.senderId?.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.text}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.replies.length}
                    </td>

                    <td className="text-right px-6 whitespace-nowrap">
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/admin/comments/" + item._id);
                        }}
                        href="#"
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
