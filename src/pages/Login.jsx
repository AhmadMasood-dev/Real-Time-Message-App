import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("passowrd", password, email);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Box</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          {/* <label>Enter your email:</label> */}
          <input type="email" placeholder="email" name="email" />
          {/* <label>Enter your password:</label> */}
          <input type="password" placeholder="password" name="password" />
          <button>Sign in</button>
          {err && <span>Something went Wrong</span>}
        </form>
        <p>
          You don't have a account? <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
