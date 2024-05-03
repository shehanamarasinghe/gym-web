import React, { useEffect, useRef, useState } from 'react';
import './AddMeal.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { DataGrid } from "@mui/x-data-grid";
import { UserTable } from "../../datatablesource.js"; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 

const UserShedule = ({ onClose, mealPlanId }) => {

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleAddMeal = (userId, mealPlanId) => {
    console.log("Adding meal for user:", userId, "with mealId:", mealPlanId);
    axios.post(`/AddMemberMeal/assignmeal`, { userId, mealPlanId })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error("Error adding meal:", error);
      });
  };


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

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleAddMeal(params.row.id, mealPlanId)}>Add Meal</div>
          </div>
        );
      },
    },
  ];

  return (
    <div ref={modalRef} onClick={closeModal} className='Addmeals'>
      <div className="AMclosebtn">
        <CloseRoundedIcon className='addclosebtn' onClick={onClose}/>
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
              columns={userColumns.concat(actionColumn)}
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

export default UserShedule;
