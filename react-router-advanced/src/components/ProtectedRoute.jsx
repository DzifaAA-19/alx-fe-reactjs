import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = true; // Change to false to test redirect

export default function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}