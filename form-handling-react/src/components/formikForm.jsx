import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/form.css";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>User Registration</h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => resetForm()}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Username</label>
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>

              <div>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}