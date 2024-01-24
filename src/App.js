import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

  


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>} />
      <Route index element = {<Register/>} />
      <Route index element = {<Home/>} />
      <Route index element = {<Home/>} />


    </Routes>
    </BrowserRouter>
  
  );
}


export default App;
