import React from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as Yup from "yup";

const SignUpForm = ({ values, touched, errors }) => (
  <div className="signup">
    <Form className="signup__form">
      <Field
        type="email"
        name="email"
        placeholder="enter your email"
        className="signup__field"
      />
      {touched.email && errors.email && (
        <p className="signup__form__error">{errors.email}</p>
      )}

      <Field
        type="password"
        name="password"
        placeholder="enter your password"
        className="signup__password"
      />
      {touched.password && errors.password && (
        <p className="signup__form__error">{errors.password}</p>
      )}

      <button type="submit" className="button submit--button">
        Sign Up
      </button>
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
  handleSubmit(values) {
    console.log(values);
    axiosWithAuth()
      .post("/signup", {
        email: values.email,
        password: values.password
      })
      .then(res => {
        console.log(res);
        //   set token to response
        localStorage.setItem("token", res);
        //   push user to private view
      })
      .catch(err => {
        console.error("you have made a major goof, my dude", err);
      });
  }
})(SignUpForm);

export default FormikSignUp;
