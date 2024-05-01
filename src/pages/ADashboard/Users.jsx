import React, { useState, useEffect } from 'react';
import Sidebar from "../../Components/ADashboardComponents/SlideBar/Slidebar";
import Navbar from '../../Components/ADashboardComponents/Navbar/Navbar';
import "./users.css";
import { DataGrid } from "@mui/x-data-grid";
import { UserTable } from "../../datatablesource.js"; 
import { Link } from "react-router-dom";
import axios from 'axios';

const Users = () => {
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

    const handleDelete = (id) => {
        axios.delete(`/users/${id}`)
            .then(response => {
                setData(data.filter(user => user.id !== id));
            })
            .catch(error => console.error("Error deleting user:", error));
    };

    const handleStatusUpdate = (id, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Deactive' : 'Active';

        axios.put(`/users/${id}/status`, { status: newStatus })
            .then(response => {
                setData(data.map(user => {
                    if (user.id === id) {
                        return { ...user, status: newStatus };
                    }
                    return user;
                }));
            })
            .catch(error => console.error("Error updating user status:", error));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/edituser/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">Edit</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                        <div className="statusButton" onClick={() => handleStatusUpdate(params.row.id, params.row.status)}>
                             {params.row.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='Adashboard'>
            <Sidebar />
            <div className="ADash-Container">
                <Navbar />
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
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
