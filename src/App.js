import Home from "./pages/Home/Home";

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./pages/Signup/Login";

  


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/Login" element = {<Login/>} />
    

    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
