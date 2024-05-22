import React, { useState } from "react";
import * as Components from "./Components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import { logIn, signUp } from "../actions/AuthAction";
function Comp() {
  const [signIn, toggle] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)
  console.log(loading)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(data));
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          />
          <Components.Input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <Components.Input
            type="password"
            placeholder="Confirm Password"
            name="confirmpass"
            onChange={handleChange}
            value={data.confirmpass}
          />

          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            * Confirm Password is not same
          </span>

          {/* <Components.Dropdown name="country" id="cntry">
            <option value="opt1">Bangladesh</option>
            <option value="opt2">Turkey</option>
            <option value="opt3">Thailand</option>
          </Components.Dropdown> */}
          {/* <Components.Input type='password' placeholder='' /> */}
          <Components.Button type="submit">{loading? "Loading..." : "Sign Up"}</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleLoginSubmit}>
          <Components.Title>To continue</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>

          {/* <NavLink to="socialhome"> */}
            <Components.Button type="submit">{loading? "Loading..." : "Sign In"}</Components.Button>
          {/* </NavLink> */}
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title2>Welcome Back!</Components.Title2>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => {
                toggle(true);
                resetForm();
              }}
            >
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title2>Hello, Friend!</Components.Title2>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => {
                toggle(false);
                resetForm();
              }}
            >
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Comp;
