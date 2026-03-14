import React,{useState,useEffect} from "react";
import { getHospitals } from "../services/api";
import axios from "axios";

function HospitalList(){

  const [hospitals,setHospitals] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:8082/hospitals")
      .then(res=>{
        console.log(res.data);
        setHospitals(res.data);
      });

  },[]);
    return(
        <div>
            <h3>Available Hospitals</h3>
            {hospitals.map((h)=>(
                <div className="hospital-card" key={h.id}>
                    {h.name} - Beds: {h.beds}
                    </div>
            ))}
        </div>
    );
}
export default HospitalList;