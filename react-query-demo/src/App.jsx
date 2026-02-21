import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet, useParams } from "react-router-dom";
import "./styles/routes.css";

// Simulated authentication
const isAuthenticated = true;

// Protected Route Component
function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Pages
function Home() {
  return <h2>Home Page</h2>;
}

function Login() {
  return <h2>Login Page (simulate login)</h2>;
}

// Profile with Nested Routes
function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProfileDetails() {
  return <p>This is your profile details.</p>;
}

function ProfileSettings() {
  return <p>This is your profile settings.</p>;
}

// Dynamic Route
function BlogPost() {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
}

// App Component
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Advanced Demo</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/blog/123">Blog 123</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected nested route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}