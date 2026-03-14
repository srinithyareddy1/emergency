import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import HospitalList from "./components/HospitalList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/user-dashboard" element={<UserDashboard/>}/>
      <Route path="/admin-dashboard"element={<AdminDashboard/>}/>
       <Route path="/hospitals" element={<HospitalList />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
