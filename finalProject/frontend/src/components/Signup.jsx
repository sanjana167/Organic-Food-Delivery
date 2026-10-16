import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  })
  const handleChange = ((e) => {
    console.log(e.target, "target")
    setData({ ...data, [e.target.name]: e.target.value })
  })
  const handleSubmit = async (e) => {
    try {
      console.log("object")
      e.preventDefault()
      const dataaa = await axios.post("http://localhost:2222/user/signup", data)
      console.log(dataaa, "SFSF")
      if (dataaa.data.status === 400) {
        toast.error(dataaa.data.message)
      } else {
        setData(dataaa.data.body)
        toast.success(dataaa.data.message)
        navigate("/")
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="auth-section signup-bg">
      <div className="auth-box">
        <div className="auth-icon">
          <i className="fa-solid fa-user-plus" />
        </div>
        <h2>Create Account</h2>
        <p className="sub-title">
          Join our organic store and start shopping fresh products
        </p>
        <form className="auth-form" onChange={handleChange} onSubmit={handleSubmit}>
          <div className="input-box">
            <i className="fa-solid fa-user" />
            <input type="text" placeholder="Enter Full Name" name='name' value={data.name} />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-envelope" />
            <input type="email" placeholder="Enter Email" name='email' value={data.email} />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-lock" />
            <input type="password" placeholder="Create Password" name='password' value={data.password} />
          </div>
          <div className="input-box">
            <i className="fa-solid fa-lock" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="social-login">
          <p>Or Signup With</p>
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
          Already have an account?
          <a href="/login">Login</a>
        </p>
      </div>
    </section>

  )
}

export default Signup
