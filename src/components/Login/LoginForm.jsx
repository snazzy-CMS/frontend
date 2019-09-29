import React from "react";
import { withFormik, Field, Form } from "formik";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as Yup from "yup";

const LoginForm = () => (
  <div className="login">
    <Form className="login__form">
      <Field className="login__field"></Field>
      <Field className="login__field"></Field>
    </Form>
  </div>
);

const FormikLogin = withFormik({
  mapPropsToValues({}) {
    return {
      //
    };
  }
})(FormikLogin);

export default FormikLogin;
