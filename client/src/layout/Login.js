import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div>
      <h1
        style={{
          margin: "10px 10px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        Login
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(12, "Must be 12 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // fetch(`http://127.0.0.1:5555/login`, values).then((r) => r.json());
            //make this a post request somehow aaaaa
            // console.log(values);
            // .then(navigate("/acctdash"));
            // navigate("/acctdash"); how do I useNavigate to redirect on submit to dashboard?
            //somewhere in here is an api call to /login
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            type="email"
            style={{
              width: "200px",
              margin: "10px 15px",
            }}
          />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            style={{
              width: "200px",
              margin: "10px 10px",
            }}
          />
          <ErrorMessage name="password" />

          <button
            type="submit"
            style={{
              width: "200px",
              margin: "10px 15px",
            }}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
