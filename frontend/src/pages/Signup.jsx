import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthContext);
  const { signup, error, isLoading } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
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
          <button className="btn" disabled={isLoading}>
            Signup
          </button>
          {error &&
            error.map((err) => (
              <div className="error" key={err.message}>
                {err.message}
              </div>
            ))}
        </div>
      </form>
    </div>
  );
};

export default Signup;
