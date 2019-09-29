import React from "react";
import { withFormik, Field, Form } from "formik";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as Yup from "yup";

const LoginForm = ({ values, touched, errors }) => (
  <div className="login">
    <Form className="login__form">
      <Field
        type="email"
        name="email"
        placeholder="enter your email"
        className="login__field"
      />
      {touched.email && erorrs.email && (
        <p className="login__form__error">{errors.email}</p>
      )}
      <Field
        type="password"
        name="password"
        placeholder="enter your password"
        className="login__field"
      />
      {touched.password && erorrs.password && (
        <p className="login__form__error">{errors.password}</p>
      )}
      <button type="submit" className="button submit--button">
        Login
      </button>
    </Form>
  </div>
);

const FormikLogin = withFormik({
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
      .post("/login", {
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
})(LoginForm);

export default FormikLogin;
