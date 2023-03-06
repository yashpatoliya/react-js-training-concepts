import { Box, Button, TextField, Typography } from "@mui/material";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { loginAction } from "../../store/loginSlice";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { GoogleLogin } from "react-google-login";
import {gapi} from 'gapi-script'

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("email is required."),
      password: yup.string().required("password is required."),
    }),
    onSubmit: (values, action) => {
      setLoading(true);
      dispatch(loginAction.login({ ...values }));
      console.log(values);
      setLoading(false);
      action.resetForm();
    },
  });


  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  const responseGoogle = (response) => {
    console.log(response);
  };
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });
  }

  return (
    <>
      <Box
        component="form"
        sx={{ mx: "auto", width: "400px" }}
        onSubmit={formik.handleSubmit}
        method="post"
      >
        <h1>Login Form</h1>
        <TextField
          color={
            formik.errors.email && formik.touched.email ? "error" : "primary"
          }
          label="email"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          name="email"
          sx={{ display: "block" }}
          margin="normal"
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <Typography color="error">{formik.errors.email}</Typography>
        ) : (
          ""
        )}

        <TextField
          color={
            formik.errors.email && formik.touched.email ? "error" : "primary"
          }
          label="password"
          variant="outlined"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          sx={{ display: "block" }}
          margin="normal"
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <Typography color="error">{formik.errors.password}</Typography>
        ) : (
          ""
        )}

        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </Box>
      <GoogleLogin
        clientId="729172313443-4n2tfgpj9tljdnd6qn930brl2f3lrf1o.apps.googleusercontent.com"
        buttonText="login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}   
        style={{
          backgroundColor : 'black',
          color:'white',
        }}
      />
      {loading && <p>loading....</p>}
    </>
  );
};

export default Login;
