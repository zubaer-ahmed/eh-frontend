import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Box from "@mui/material/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const tableItems = [
  {
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Software engineer",
    salary: "$100K",
  },
  {
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    position: "Product designer",
    salary: "$90K",
  },
  {
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    position: "Front-end developer",
    salary: "$80K",
  },
  {
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    position: "Laravel engineer",
    salary: "$120K",
  },
  {
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    position: "Open source manager",
    salary: "$75K",
  },
];

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [comments, setComments] = React.useState();
  React.useEffect(() => {
    (async () => {
      let fetchedJobs = await (
        await fetch("http://localhost:8000/api/reviews/getReviews")
      ).json();
      setComments(fetchedJobs.map((e, i) => ({ ...e, id: i })));
      console.log(comments);
    })();
    return () => {};
  }, []);

  return (
    <div className="w-full h-full flex flex-col grow">
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab iconPosition="start" label="Reviews" />
        <Tab iconPosition="start" label="Suggestions" />
        <Tab iconPosition="start" label="Questions" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="max-w-screen-xl md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Job</th>
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Comment</th>
                  <th className="py-3 px-6">Reply</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {comments &&
                  comments.map((item, idx) => (
                    <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                        {item.jobId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.senderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="type here..."
                        />
                      </td>
                      <td className="text-right px-6 whitespace-nowrap">
                        <a
                          href="javascript:void()"
                          className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Reply
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="max-w-screen-xl md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Comment</th>
                  <th className="py-3 px-6">Reply</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {comments &&
                  comments.map((item, idx) => (
                    <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.senderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="type here..."
                        />
                      </td>
                      <td className="text-right px-6 whitespace-nowrap">
                        <a
                          href="javascript:void()"
                          className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Reply
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="max-w-screen-xl md:px-8">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Question</th>
                  <th className="py-3 px-6">Reply</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {comments &&
                  comments.map((item, idx) => (
                    <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.senderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.text}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="type here..."
                        />
                      </td>
                      <td className="text-right px-6 whitespace-nowrap">
                        <a
                          href="javascript:void()"
                          className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Reply
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
