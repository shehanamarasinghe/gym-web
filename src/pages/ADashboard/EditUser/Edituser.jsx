// EditUser.js
import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/ADashboardComponents/SlideBar/Slidebar.jsx";
import Navbar from "../../../Components/ADashboardComponents/Navbar/Navbar.jsx";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [file, setFile] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    weight: "",
    height: ""
  });

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  const fetchUserData = (id) => {
    axios.get(`/users/${id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleUpdate = () => {
    axios.put(`/users/${id}`, userData)
      .then(response => {
        console.log("User details updated successfully:", response.data);
      })
      .catch(error => {
        console.error("Error updating user details:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={userData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="Weight (kg)"
                  value={userData.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  placeholder="Height (cm)"
                  value={userData.height}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handleUpdate}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
