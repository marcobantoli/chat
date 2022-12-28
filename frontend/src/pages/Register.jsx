import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegister(formData.username, formData.email, formData.password)
  }

  return (
    <>
      <div className="site-name">
        Pamda
      </div>
      <div className="card">
        <form className="form-container" onSubmit={handleSubmit}>
          <input className="input-container" type="text" name="username" value={formData.username} placeholder="Username" onChange={handleChange} />
          <input className="input-container" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
          <input className="input-container" type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
          <input className="input-container" type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm password" onChange={handleChange} />
          <button className="submit-button" type="submit">Login</button>
        </form>
        <button id="signin-button" onClick={() => navigate('/login')}>Sign in instead</button>
      </div>
    </>
  )
}

export default Register
