import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login-area">
      <div className="sing-up-area">
        <div>
          <h1>Sing Up</h1>
        </div>
        <div className="mt-3">
          <form action="#">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="my-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="my-2"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="my-2"
            />
            <button type="submit" className="submit">
              Continue
            </button>
          </form>
        </div>
        <div className="sing-in my-1">
          <span>Allready have an account? </span>{" "}
          <Link className="text-decoration-none">Login here</Link>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="checkbox"
          />
          <span className="privacy">
            By Continuing i agree to the terms of use & privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
