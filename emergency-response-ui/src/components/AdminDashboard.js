import EmergencyRequests from "./EmergencyRequests";
import AddHospital from"./AddHospital";
import { useNavigate } from "react-router-dom";



function AdminDashboard(){
    const navigate=useNavigate();

const handleLogout=()=>{
    localStorage.removeItem("user");
    navigate("/");
};
    return(
    <div className="dashboard">
        <h2>Developer Dashboard</h2>
        <EmergencyRequests/>
        <AddHospital/>
        <button onClick={handleLogout} className="logout-btn">
            Logout
        </button>
        

<button onClick={() => navigate("/hospitals")}>
 View Hospitals
</button>
    </div>
    )
}
export default AdminDashboard;