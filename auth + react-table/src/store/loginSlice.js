import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// async function postData(url = "", data = {}) {
//   const response = await axios.post(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return response;
// }

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginAuth: false,

    email: "",
    password: "",
  },
  reducers: {
    login(state, action) {
      let obj = {
        email: action.payload.email,
        password: action.payload.password,
      };
      let st = JSON.stringify(obj);
      localStorage.setItem("userInfo", st);
      localStorage.setItem("user", true);
      state.loginAuth = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      console.log(state.loginAuth);
      window.location.href = "/home";
    },
    logout() {
      let obj = {
        email: "",
        password: "",
      };
      let st = JSON.stringify(obj);
      localStorage.setItem("userInfo", st);
      localStorage.setItem("user", false);
      window.location.href = "/";
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice;
