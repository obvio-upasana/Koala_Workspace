import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password reset to:", newPassword);
    alert("Password has been reset successfully!");
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Koala Workspace ....</h1>
      </div>

      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          <p className="welcome-text">Enter your new password</p>

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
          <Link to="/" className="forgot-link">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
