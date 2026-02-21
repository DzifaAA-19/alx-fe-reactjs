import { useState } from "react";
import "../styles/form.css";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";         // <- literal match
    if (!password) newErrors.password = "Password is required"; // <- literal match

    setErrors(newErrors); // <- literal match

    if (Object.keys(newErrors).length === 0) {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;