import { useState } from "react";
import "../styles/form.css";

function RegistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!values.username) newErrors.username = "Username is required";
    if (!values.email) newErrors.email = "Email is required";
    else if (!values.email.includes("@"))
      newErrors.email = "Email must contain @";
    if (!values.password) newErrors.password = "Password is required";
    else if (values.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    // only submit if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("User Registered:", values);
      setValues({ username: "", email: "", password: "" }); // reset form
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
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
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