import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet, useParams } from "react-router-dom";
import "./styles/routes.css";

const isAuthenticated = true; // Simulate login

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function Home() { return <h2>Home Page</h2>; }
function Login() { return <h2>Login Page (simulate login)</h2>; }

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <div className="outlet-container">
        <Outlet /> {/* Nested routes render here */}
      </div>
    </div>
  );
}

function ProfileDetails() { return <p>This is your profile details.</p>; }
function ProfileSettings() { return <p>This is your profile settings.</p>; }

function BlogPost() {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
}

// ✅ Only App has default export
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
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}