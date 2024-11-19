import React from "react";
import "./Login.css"; // Import corresponding CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          HI, <span className="welcome">WELCOME!</span>
        </h1>
        <p className="login-subtitle">Login to your Underwriter Portal.</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username" className="login-input" />
            <span className="input-icon">&#128100;</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <span className="input-icon">&#128274;</span>
          </div>
          <div className="password-links">
            <a href="#forgot" className="link">
              Forgot Password
            </a>
            <a href="#change" className="link">
              Change Password
            </a>
          </div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;