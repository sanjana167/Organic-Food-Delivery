import axios from 'axios'
import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
   const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

 
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2222/user/login",
        data
      );

      if (res.data.status === 400) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        localStorage.setItem("user", "true");

        navigate("/");
      }
    } catch (error) {
  console.log(error.response);
  console.log(error);

  toast.error(
    error.response?.data?.message || "Login failed"
  );
}
  }
  return (
   <section className="auth-section login-bg">
  <div className="auth-box">
    <div className="auth-icon">
      <i className="fa-solid fa-user" />
    </div>
    <h2>Welcome Back</h2>
    <p className="sub-title">
      Login to continue shopping fresh organic products
    </p>
    <form className="auth-form" onChange={handleChange} onSubmit={handleSubmit}>
      <div className="input-box">
        <i className="fa-solid fa-envelope" />
        <input type="email" placeholder="Enter your email" name='email' value={data.email}/>
      </div>
      <div className="input-box">
        <i className="fa-solid fa-lock" />
        <input type="password" placeholder="Enter your password"name='password' value={data.password}  />
      </div>
      <div className="extra-links">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
      <button type="submit">Login Now</button>
    </form>
    <div className="social-login">
      <p>Or login with</p>
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-google" />
        </a>
        <a href="#">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fa-brands fa-apple" />
        </a>
      </div>
    </div>
    <p className="bottom-text">
      Don’t have an account?
      <a href="/signup">Create Account</a>
    </p>
  </div>
</section>

  )
}

export default Login;
