// import mongoose from 'mongoose';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./usersDetails.css";

function UserDetail() {
    const history = useHistory();
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [message, setMessage] = useState('');
    const [userIdCounter, setUserIdCounter] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [functionName, setFunctionName] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [description, setDescription] = useState('');
    
    const generateUniqueId = () => {
      // Increment the counter for each new user ID
      const newUserId = userIdCounter;
      setUserIdCounter(userIdCounter + 1);
      return newUserId.toString();
  }
  useEffect(() => {
    // Fetch user details from the server
    const fetchUserDetails = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          // Handle case where no token is available, e.g., user is not logged in
          // You can redirect to the login page or show an error message
          return;
        }

        const response = await fetch('/api/user-details', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserId(data._id);
          setName(data.firstName);
          setEmail(data.email);
          // You can set other user details like age, address, phoneno, etc. here as well
        } else if (response.status === 401) {
          // Handle unauthorized access here
          console.error('Unauthorized access. Redirecting to login...');
          // Redirect to the login page
          history.push('/login'); // Replace 'login' with your actual login route
        } else {
          console.error('Error fetching user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/user-details', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            address,
            phoneno,
            message,
            userId: generateUniqueId(), // You need to provide the user ID here
            selectedDate,
            functionName,
            description
          }),
        });
  
        const data = await response.json();
        console.log(data.message); // User details added successfully
        setMessage(data.message);
      } catch (error) {
        console.error('Error adding user details:', error);
      }
    };
    
    return (
    <div className='usrContainer'>
      <form className='userForm' onSubmit={handleSubmit}>
        <h1> Add Your Details </h1>
        <div className='formGroup'>
          <label className='lab' htmlFor="userId">User ID :</label>
          {userId !== null ? (
          <input
          type="text"
          id="userId"
          value={userId}
          readOnly
          className='usrInput'
          
          />
          ) : (
          <p>Loading...</p>
          )}
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='usrInput'
            readOnly={!authenticated}
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='usrInput'
            readOnly={!authenticated}
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="address">Address :</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='usrInput'
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="phoneno">Phone Number:</label>
          <input
            type="text"
            id="phoneno"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            className='usrInput'
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="selectedDate">Select Date:</label>
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='usrInput'
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="functionName">Function Name:</label>
          <input
            type="text"
            id="functionName"
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            className='usrInput'
          />
        </div>
        <div className='formGroup'>
          <label className='lab' htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Change setMessage to setDescription
            className='usrInput'
          />
        </div>
          <button type="submit">Submit</button>
          <p className='msg'> {message}</p>
        </form>
      </div>
    );
  }

export default UserDetail;