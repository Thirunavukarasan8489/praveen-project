import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./user.css";

function User() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // To store validation errors
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const validateForm = () => {
    const newErrors = {};

    // Validate firstname
    if (!firstName) {
      newErrors.firstName = 'First name is required';
    }

    // Validate lastname
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    }
    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Clear previous errors
      setErrors({});

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      if (response.ok){
        console.log(data.message); // User registered successfully
        setRegistrationMessage(data.message);
        localStorage.setItem('authToken', data.token);
        history.push('/login');
      } else {
        console.error('Error Registering User:', data.message)
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="user-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h1> Create Account</h1>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
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
          <button type="submit">Register</button>
        </div>
        <p className="registration-message">{registrationMessage}</p>
        <p className="login-link">Already registered? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
}

export default User;
