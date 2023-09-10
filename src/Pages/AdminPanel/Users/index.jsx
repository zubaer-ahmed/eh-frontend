import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import AlertView from "../../../Components/AlertView";
import React from "react";

import {
  DataGrid,
  GridRowModes,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";

const rows = [];

const Service = () => {
  const [users, setUsers] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({}); // mode is for edit/view switching
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]); // selection is used by checkbokes

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    console.log(rowModesModel);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    await fetch("http://localhost:8000/api/users/deleteUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users.find((row) => row.id == id)),
    });
    setUsers(users.filter((row) => row.id !== id));
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = users.find((row) => row.id === id);
    if (editedRow.isNew) {
      setUsers(users.filter((row) => row.id !== id));
    }
  };
  const processRowUpdate = async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setUsers(users.map((row) => (row.id == newRow.id ? updatedRow : row)));
    let res = await fetch("http://localhost:8000/api/users/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRow),
    });

    return updatedRow;
  };
  // React.useEffect(() => {
  //   return () => {};
  // }, [users]);

  const columns = [
    {
      editable: true,
      field: "firstName",
      headerName: "First Name",
      width: 250,
    },
    { editable: true, field: "lastName", headerName: "Last Name", width: 250 },
    { editable: true, field: "email", headerName: "Email", width: 250 },
    { editable: true, field: "password", headerName: "Password", width: 250 },
    { editable: true, field: "role", headerName: "Role", width: 250 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
            />,
          ];
        }
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Add"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  React.useEffect(() => {
    (async () => {
      let fetchedJobs = await (
        await fetch("http://localhost:8000/api/users/getUsers")
      ).json();
      setUsers(fetchedJobs.map((e, i) => ({ ...e, id: i })));
      console.log("users fetched");
    })();
    return () => {};
  }, []);
  return (
    <div className="flex flex-col w-full h-full p-4 overflow-auto">
      <h1 className="text-2xl font-bold my-4 text-gray-700">Users</h1>
      <div className="flex space-x-2 mb-4">
        {" "}
        <div className=" material-button flex items-center">
          <AddIcon />
          <span>Add</span>
        </div>
        <div
          className="material-button"
          onClick={() => {
            setUsers(
              users.filter((row) => !rowSelectionModel.includes(row.id))
            );
            rowSelectionModel.forEach((id) => {
              fetch("http://localhost:8000/api/users/deleteUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(users.find((row) => row.id == id)),
              });
            });
          }}
        >
          <DeleteIcon />
          Delete
        </div>
      </div>
      <div className="h-96 w-full">
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 50, 100]}
          editMode="row"
          checkboxSelection
          rowSelectionModel={rowSelectionModel}
          disableRowSelectionOnClick
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          processRowUpdate={processRowUpdate}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          slots={{
            toolbar: ({ setUsers, setRowModesModel }) => <></>,
          }}
          slotProps={{
            toolbar: { setUsers, setRowModesModel },
          }}
        />
      </div>{" "}
    </div>
  );
};

export default Service;
