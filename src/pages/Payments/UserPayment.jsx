import React, { useEffect, useRef, useState } from 'react';
import './UserPayment.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { DataGrid } from "@mui/x-data-grid";
import { UserTable } from "../../datatablesource";
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserPayment = ({ onClose, onSelectUser }) => {
  const modalRef = useRef();
  const [data, setData] = useState([]);
  const { userData, userColumns } = UserTable();

  useEffect(() => {
    axios.get("/user")
      .then(response => {
        const users = response.data.map(user => ({
          id: user.userid,
          name: user.username,
          email: user.Email,
          age: user.Age,
          status: user.Status,
        }));
        setData(users);
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleAddUser = (userId) => {
    onSelectUser(userId);
    onClose();
  };

  const actionColumn = (handleAddUser) => [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleAddUser(params.id)}>Add User</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='Addmeals' ref={modalRef} onClick={closeModal}>
      <div className="AMclosebtn">
        <CloseRoundedIcon className='addclosebtn' onClick={onClose} />
        <div className="AMaddmealbody">
          <div className="datatable">
            <div className="datatableTitle">
              Add New User
              <Link to="/users/new" className="link">
                Add New
              </Link>
            </div>
            <DataGrid
              className="datagrid"
              rows={data}
              columns={userColumns.concat(actionColumn(handleAddUser))}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserPayment;