import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from './authContact';
import { v4 as uuidv4 } from 'uuid';
import "./login.css";
import axios from 'axios';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     setErrors({ email: 'Email and password are required' });
  //     return;
  //   }

  //   try {
  //     setErrors({});
  //     setLoginMessage('');

  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     console.log('Response:', response)

  //     const data = await response.json();
  //     console.log('Data:', data);
  //     console.log('Message:', data.message);
  //     setLoginMessage(data.message);

  //     // Redirect to dashboard or home page after successful login
  //     if (response.ok) {
  //       const sessionID = uuidv4();
  //       console.log('Session ID:', sessionID)
  //       localStorage.setItem('authToken', data.token);
  //       localStorage.setItem('sessionID', sessionID);
  //       const userEmail = email;
  //       const userDetailsResponse = await fetch('/api/user-details-by-email', {
  //         headers: {
  //           Authorization: `Bearer ${data.token}`,
  //           'Session-ID': sessionID,
  //           'User-Email': userEmail,
  //         },
  //       });
  //     const userDetailsData = await userDetailsResponse.json();
  //       setUserDetails(userDetailsData.user);
  //       setIsAuthenticated(true);
  //       history.push('/welcome');
  //   } else {
  //     // Redirect to welcome page without user details
  //     history.push('/welcome');
  //     }
  //   } catch (error) {
  //     console.error('Error logging in:', error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { email, password }
    console.log(data);
    const Url = `http://localhost:5500/api/login`
    axios.post(Url, data)
      .then((res) => {
        let tokens = res.data.token
        // localStorage.setItem('token',tokens)
        sessionStorage.setItem('token',tokens)
        window.location = '/welcome'
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login </h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} /> {/* Use FontAwesome icons */}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className='button-container'>
          <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
        <p className="login-message">{loginMessage}</p>
        <p className="register-link">Don't have an account? <a href="/user">Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
