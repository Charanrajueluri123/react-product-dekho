import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../css/sign_up.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameMessage, setNameMessage] = useState({ text: "", isError: false });
  const [emailMessage, setEmailMessage] = useState({ text: "", isError: false });
  const [passwordMessage, setPasswordMessage] = useState({ text: "", isError: false });
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordMessage({ text: "Password must contain at least one capital letter, one number, and one special character.", isError: true });
      return;
    } else {
      setPasswordMessage({ text: "Password matches the requirements.", isError: false });
    }

    try {
      const result = await axios.post('http://localhost:3001/register', { name, email, password });
      if (result.data.message) {
        if (result.data.message.includes("email")) {
          setEmailMessage({ text: result.data.message, isError: true });
        }
        if (result.data.message.includes("name")) {
          setNameMessage({ text: result.data.message, isError: true });
        }
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkAvailability = async (field, value) => {
    try {
      const response = await axios.post(`http://localhost:3001/check-${field}`, { value });
      if (response.data.exists) {
        if (field === "name") setNameMessage({ text: "Username already exists", isError: true });
        if (field === "email") setEmailMessage({ text: "Email already exists", isError: true });
      } else {
        if (field === "name") setNameMessage({ text: "Username is available", isError: false });
        if (field === "email") setEmailMessage({ text: "Email is available", isError: false });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="signup-container">
        <h2>Register</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter Name" 
              required 
              onChange={(e) => {
                setName(e.target.value);
                checkAvailability("name", e.target.value);
              }}
            />
            {nameMessage.text && <p className={nameMessage.isError ? "error" : "success"}>{nameMessage.text}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter Email" 
              required 
              onChange={(e) => {
                setEmail(e.target.value);
                checkAvailability("email", e.target.value);
              }}
            />
            {emailMessage.text && <p className={emailMessage.isError ? "error" : "success"}>{emailMessage.text}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter Password" 
              required 
              onChange={(e) => {
                setPassword(e.target.value);
                if (!validatePassword(e.target.value)) {
                  setPasswordMessage({ text: "Password must contain at least one capital letter, one number, and one special character.", isError: true });
                } else {
                  setPasswordMessage({ text: "Password matches the requirements.", isError: false });
                }
              }}
            />
            {passwordMessage.text && <p className={passwordMessage.isError ? "error" : "success"}>{passwordMessage.text}</p>}
          </div>
          <button type="submit" className="btn register-btn">Register</button>
        </form>
        <div className="login-link">
          <p>Already Have an Account</p>
          <Link to="/login" className="btn login-btn">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
