import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MDashboard from "./pages/MDashboard/MDashboard";

  


function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element = {<Home/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
    <Route path="/MDashboard" element={<MDashboard/>}/>

    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
