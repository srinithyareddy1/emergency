import React,{useState,useEffect} from "react";
import { getHospitals } from "../services/api";

function HospitalList(){

  const [hospitals,setHospitals] = useState([]);

  useEffect(()=>{

    getHospitals()
      .then(res=>{
        console.log(res.data);
        setHospitals(res.data);
      })
      .catch(err => console.error(err));

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