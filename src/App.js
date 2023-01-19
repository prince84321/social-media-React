import Home from "./pages/home/Home";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element ={<Login />} />
   <Route path="/home" element={<Home />} />
   <Route path="/profile" element={<Profile />} />
   <Route path="/register" element ={<Register />} />
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
