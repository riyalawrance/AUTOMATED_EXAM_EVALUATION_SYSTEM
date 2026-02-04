import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="login-left">
        <div className="overlay">
          <h1 className="site-name">SAGE</h1>
          <p className="tagline">Empowering Education Digitally</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Please login to your account</p>

          <div className="form-row">
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
