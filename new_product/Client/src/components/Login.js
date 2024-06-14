import { useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import '../css/sign_up.css';

function Login({ setIsLoggedIn, setUsername }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", isError: false });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log("Server response:", result.data);
        if (result.data.success) {
          setMessage({ text: `Welcome, ${result.data.username}`, isError: false });
          setIsLoggedIn(true);
          setUsername(result.data.username); // Assuming setUsername updates the username state in a parent component
          
          const from = location.state?.from?.pathname || '/';
          navigate(from);
        } else {
          setMessage({ text: result.data.message, isError: true });
        }
      })
      .catch(error => {
        console.error("Error during login request:", error);
        setMessage({ text: "An error occurred. Please try again.", isError: true });
      });
  };

  return (
    <div className="App">
      <div className="signup-container">
        <h2>Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {message.text && <p className={message.isError ? "error" : "success"}>{message.text}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email" required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password" required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn register-btn">Login</button>
        </form>
        <div className="login-link">
          <p>Forgotten password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
