import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";


function Signup(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("user");

    const navigate=useNavigate();

    const handleSignup= async ()=>{
        try{
            await axios.post(
"https://auth-service-y83q.onrender.com/auth/signup",                {
                    email:email,
                    password:password,
                    role:role.toLocaleUpperCase()
                }
            );
            alert("Signup successful");
            navigate("/");
        }catch(error){
            alert("Signup failed");
        }
       
    };

    return(
        <div>
            <h2>
                Signup
            </h2>
            <input
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            >
            <option value={"user"}>User </option>
            <input type="hidden" value="user"/>
               </select>
            
            <br/>
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}
export default Signup;