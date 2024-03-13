import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import MDashboard from "./pages/MDashboard/MDashboard.jsx"
import ADashboard from "./pages/ADashboard/ADashboard.jsx"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AddReminder from "./Components/MDashboardComponent/Reminder/AddReminder.jsx";
import AMealPlan from "./pages/MealPlan/AMealPlan.jsx";
import WorkoutPlan from "./pages/WorkoutPlan/WorkoutPlan.jsx";
import QrcodeScanner from "./Components/ADashboardComponent/Navbar/QrcodeScanner.jsx";
import MemberMeal from "./pages/MealPlan/MemberMeal.jsx";
import Memberworkout from "./pages/WorkoutPlan/Memberworkout.jsx";

  


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

       

    </Routes>
    </BrowserRouter>

    
  );
}


export default App;