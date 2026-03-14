import axios from  "axios";

const API=axios.create({
    baseURL:"http://localhost:8080"
});
export const requestAmbulance=(data)=>{
    return API.post("/emergency/request",data);
};
export const getHospitals=()=>{
    return API.get("/hospital/available");
};
export const getEmergencies=()=>{
    return API.get("/emergency/all");
};