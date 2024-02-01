import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Signup/Login";
import Register from "./pages/Register/Register";

  


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/Register"  element={<Register/>}/>
    

    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
