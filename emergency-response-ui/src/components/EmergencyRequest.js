import React, { useEffect, useState } from "react";
import { getEmergencies, requestAmbulance } from "../services/api";

function EmergencyRequest() {
    const [location, setLocation] = useState("");
    const [requests, setRequests] = useState([]);
    const [name,setName]=useState("");
     

    useEffect(()=>{
        fetchRequests();
    },[]);

     const fetchRequests=async()=>{
        try{
            const res=await getEmergencies();
            setRequests(res.data);
        }catch(error){
            console.log(error);
        }
     };
       const handleRequest=async()=>{
        if(!name || !location){
            alert("please enter name and location");
            return;
        }try{
            await requestAmbulance({
                name:name,
                location:location
            }); 
            alert("Ambulance requested");

            setName("");
            setLocation("");

            fetchRequests();
        }catch(error){
            console.log(error);
        }
       };
    
        return (
            <div>
                <h3>Request Ambulance</h3>
                <input
                  placeholder="Enter name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  />

                <input
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={handleRequest}>Request</button>

                <h3>Emergency Requests</h3>

                {requests.map((req) => (
                    <div className="request-card" key={req.id}>
                        Name:{req.name}<br/>
                        Location:{req.location}<br />
                        Status:{req.status}

                        <hr />
                        </div>
              ))}
                    </div>
                );

}
                export default EmergencyRequest;