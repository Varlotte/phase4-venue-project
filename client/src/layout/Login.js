import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { CurrentUserContext } from "../Helperfuncs";
import Navbar from "./NavBar";


const Login = () => {
  const history = useHistory();
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: `Login Successful`,
    });
  };
  return (
    <div>
      <Navbar />
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
            fetch("http://127.0.0.1:5555/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.id) {
                  window.sessionStorage.setItem("currentUser", data.id);
                  setCurrentUser(data.id);
                  //this passes current user to context
                  //sets current logged in user id so any other component can use it
                  //user id for the rest of the app is going to be sessionStorage.getItem('currentUser')
                  history.push("/acctdash");
                } else {
                  alert("Login is bad.");
                }
              });
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
            onClick={success}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;