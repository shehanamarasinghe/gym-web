
import React, { useEffect, useState } from "react";
import axios from "axios";
import image1 from "./Images/t-image2.jpg";
import "./Datatablesources.css";

export const UserTable = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("/user")
            .then(response => {
                const users = response.data.map(user => ({
                    id: user.userid,
                    username: user.UserName,
                    email: user.Email,
                    age : user.Age,
                    status: user.Status,
                    img: image1, 
                }));
                setUserData(users);
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "user",
            headerName: "User",
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={image1} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 230,
        },
        {
            field: "age",
            headerName: "Age",
            width: 100,
        },
        {
            field: "status",
            headerName: "Status",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                );
            },
        },
    ];

    return { userData, userColumns };
};
