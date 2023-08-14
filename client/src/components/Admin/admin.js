import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Add this import
import './admin.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Form({ title, onSubmit, message }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory(); // Initialize history here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onSubmit(username, password);

    if (success) {
      // Redirect to user details page
      history.push('/user-details');
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={`password-toggle ${showPassword ? 'visible' : ''}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Use icons here */}
            </div>
          </div>
          <button type="submit">{title}</button>
        </form>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

function Admin() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user details from the server
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:5500/api/user-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.success) {
          setUsers(data.user);
        } else {
          // Handle error
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle error
      }
    }

    fetchUsers();
  }, []);

  // Function to view user details
  const viewUserDetails = (userId) => {
    history.push(`/user-details/${userId}`);
  };

  // Handle user login
  const handleLogin = async (username, password) => {
    if (username === 'admin' && password === 'password') {
      setMessage('Login successful');
      return true;
    } else {
      setMessage('Invalid credentials');
      return false;
    }
  };

  return (
    <div className="container">
      <Form
        title="Login"
        onSubmit={handleLogin}
        message={message}
      />
    </div>
  );
}

export { Admin as default };
