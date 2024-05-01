import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Register/Register.jsx"
import MDashboard from "./Pages/MDashBoard/MDashboard.jsx"
import ADashboard from "./Pages/ADashboard/ADashboard.jsx"
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import AddReminder from "./Components/MDashboardComponents/Reminder/AddReminder.jsx";
import AMealPlan from "./Pages/MealPlan/AMealPlan.jsx";
import WorkoutPlan from "./Pages/WorkoutPlan/WorkoutPlan.jsx";
import QrcodeScanner from "./Components/ADashboardComponents/Navbar/QrcodeScanner.jsx";
import MemberMeal from "./Pages/MealPlan/MemberMeal.jsx";
import Memberworkout from "./Pages/WorkoutPlan/Memberworkout.jsx";
import AMealplanAdd from "./Pages/MealPlan/AMealplanAdd.jsx";
import Users from "./Pages/ADashboard/Users.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import EditUser from "./Pages/ADashboard/EditUser/Edituser.jsx"

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/"element = {<Home/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Mdashboard" element={<MDashboard />} />
      <Route path="/AddReminder" element={<AddReminder/>} />
      <Route path="/ADashboard" element={<ADashboard/>}/>
      <Route path="/AMealPlan" element={<AMealPlan/>}/>
      <Route path="/AWorkoutPlan" element={<WorkoutPlan/>}/>
      <Route path="/Qrcode" element={<QrcodeScanner/>}/>
      <Route path="/MemberMeal" element={<MemberMeal/>}/>
      <Route path="/Memberworkout" element={<Memberworkout/>}/>
      <Route path="/AddMemberMeal" element={<AMealplanAdd/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/edituser/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>

    
  );
}


export default App;
