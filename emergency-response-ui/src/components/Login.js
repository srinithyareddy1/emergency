import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                ("https://auth-service-y83q.onrender.com/login"), {
                email: email,
                password: password
            }
            );
            const user = response.data;

            //store logged user
            localStorage.setItem("user", JSON.stringify(user));
            const role = user.role;

            if (role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/user-dashboard");
            }
        } catch (error) {
            alert("Invalid credentials");
        }
    };



    return (
        <div className="container">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>
                Login
            </button>
            <p>
                Dont have an account?
            </p>
            <Link to="/signup">Signup</Link>

        </div>
    );
}

export default Login;