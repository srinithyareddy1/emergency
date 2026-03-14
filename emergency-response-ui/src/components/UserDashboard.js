import React from "react";
import EmergencyRequest from "./EmergencyRequest";
import "../App.css";
import { useNavigate } from "react-router-dom";


function UserDashboard(){
    const navigate=useNavigate();

const handleLogout=()=>{
    localStorage.removeItem("user");
    navigate("/");
};
    return(
        <div className="dashboard">

            <h2>Clear your EMERGENCYYY</h2>
            <EmergencyRequest/>
            <button onClick={handleLogout} className="logout-btn">
  Logout
</button>
<button onClick={() => navigate("/hospitals")}>
 View Available Hospitals
</button>
        </div>
    );
}
export default UserDashboard;
