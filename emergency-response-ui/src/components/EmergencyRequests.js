import React,{useState,useEffect} from "react";

function EmergencyRequests(){
    const [requests,setRequests]=useState([]);

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("requests")) ||[];

        setRequests(data);
    },[]);
    return(
        <div>
            <h3>Emergency Requests</h3>
            {requests.map((r)=>(
                <div key={r.id} className="request-card">
                    Name:{r.name}<br/>
                    Location:{r.location}<br/>
                    Status:{r.status}
                    </div>
            ))}
        </div>
    )
}
export default EmergencyRequests;