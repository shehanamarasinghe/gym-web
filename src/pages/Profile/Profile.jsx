import "./Profile.css";
import Sidebar from"../../Components/MDashboardComponents/SlideBar/Slidebar.jsx";
import Navbar from "../../Components/MDashboardComponents/Navbar/Navbar.jsx";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Profile = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
       <Sidebar />
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>{title}</h1>
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
            <button className="sendbutton">Send</button>
          </div>
          
          <div className="right">
            <form>
             
                <div className="formInput" >
                  <label>Name</label>
                  <label className="UserDetail">Test Name</label>
                </div>
                <div className="formInput" >
                  <label>Username</label>
                  <label className="UserDetail">TestName</label>
                </div>
                <div className="formInput" >
                  <label>Email</label>
                  <label className="UserDetail">testName@gmail.com</label>
                </div>
                <div className="formInput" >
                  <label>Phone number</label>
                  <label className="UserDetail">078 341 5051</label>
                </div>
                <div className="formInput" >
                  <label>Adress</label>
                  <label className="UserDetail">panadura, colombo, Sri Lanka</label>
                </div>
                <div className="formInput" >
                  <label>weight</label>
                  <label className="UserDetail">35Kg</label>
                </div>
                <div className="formInput" >
                  <label>height</label>
                  <label className="UserDetail">160cm</label>
                </div>
                <div className="formInput" >
                  <label>Age</label>
                  <label className="UserDetail">21</label>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;