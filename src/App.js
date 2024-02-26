import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import MDashboard from "./pages/MDashboard/MDashboard.jsx"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AddReminder from "./Components/MDashboardComponent/Reminder/AddReminder.jsx";

  


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/"element = {<Home/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Mdashboard" element={<MDashboard />} />
      <Route path="/AddReminder" element={<AddReminder/>} />
    </Routes>
    </BrowserRouter>

    
  );
}


export default App;