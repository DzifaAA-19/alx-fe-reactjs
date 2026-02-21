import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/routes.css";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}