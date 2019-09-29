import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as Yup from "yup";

const SignUpForm = () => (
  <div className="signup">
    <Form className="signup__form">
      <Field
        type="email"
        name="email"
        placeholder="enter your email"
        className="signup__field"
      />

      <Field
        type="password"
        name="password"
        placeholder="enter your password"
        className="signup__password"
      />

      <button type="submit">Sign Up</button>
    </Form>
  </div>
);

const FormikSignUp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Minimum of 8 characters")
      .max(24, "No longer than 24 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/gm,
        "Your password sucks"
      )
  }),
  handleSubmit()
});
