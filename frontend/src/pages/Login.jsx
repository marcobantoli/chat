import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    handleLogin(formData.email)
  }

  return (
    <>
      <div className="site-name">
        Pamda
      </div>
      <div className="card">
        <form className="form-container" onSubmit={handleSubmit}>
          <input className="input-container" type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
          <input className="input-container" type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
          <button className="submit-button" type="submit">Login</button>
        </form>
        <button id="create-acc-button" onClick={() => navigate('/register')}>Create a new account</button>
      </div>
    </>
  )
}

export default Login
