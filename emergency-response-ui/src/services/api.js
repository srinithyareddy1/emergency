import axios from "axios";

/* ========================
   MICROSERVICE URLS
======================== */

const AUTH_API = "https://auth-service-y83q.onrender.com";
const HOSPITAL_API = "https://emergency-vpux.onrender.com";
const EMERGENCY_API = "https://emergency-service-f5lz.onrender.com";


/* ========================
   AUTH SERVICE
======================== */

export const loginUser = (data) => {
  return axios.post(`${AUTH_API}/auth/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${AUTH_API}/auth/register`, data);
};


/* ========================
   HOSPITAL SERVICE
======================== */

export const getHospitals = () => {
  return axios.get(`${HOSPITAL_API}/hospital/available`);
};

export const addHospital = (data) => {
  return axios.post(`${HOSPITAL_API}/hospital/add`, data);
};


/* ========================
   EMERGENCY SERVICE
======================== */

export const requestAmbulance = (data) => {
  return axios.post(`${EMERGENCY_API}/emergency/request`, data);
};

export const getEmergencies = () => {
  return axios.get(`${EMERGENCY_API}/emergency/all`);
};