import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Unknown Context");
  }

  const { user, dispatch } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/signup", {
        email,
        password,
      })
      .then((response) => {
        dispatch({ type: "SET_USER", payload: response.data });
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data.error);
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-container">
          <h2>Signup Form</h2>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="btn">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
