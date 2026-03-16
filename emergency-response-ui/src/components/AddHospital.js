import React, { useEffect, useState } from "react";
import { getHospitals, addHospital } from "../services/api";

function AddHospital() {
    const [name, setName] = useState("");
    const [location,setLocation]=useState("");
    const [beds, setBeds] = useState("");
    const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
  getHospitals()
    .then(res => {
      setHospitals(res.data);
    })
    .catch(err => console.log(err));
}, []);

    const handleAdd = () => {

  const hospitalData = {
    name: name,
    location: location,
    beds: beds
  };

  addHospital(hospitalData)
    .then(res => {
      setHospitals([...hospitals, res.data]);
    })
    .catch(err => console.log(err));

  setName("");
  setLocation("");
  setBeds("");
};
    return (
        <div>
            <h3>Add Hospital</h3>
            <input
                placeholder="Hospital Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                placeholder="Available Beds"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
            />
            <button onClick={handleAdd}>
                Add Hospital
            </button>
            

        </div>
    );


}
export default AddHospital;