import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../User/authContact"; // Import your AuthContext
import "./viewBooking.css";

const ViewBooking = (props) => {
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext); // Use the AuthContext to check if the user is authenticated
  const [userDetails, setUserDetails] = useState(props.location.state?.userDetailsData || []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const sessionID = localStorage.getItem('sessionID');
        if (!authToken || !sessionID || !isAuthenticated) {
          // Handle case where no token is available or user is not authenticated
          // You can redirect to the login page or show an error message
          history.push('/login'); // Redirect to login page if not authenticated
          return;
        }
        console.log('userDetails.email:', userDetails.email);
        const response = await fetch('http://localhost:5500/api/user-details-by-email', {
          headers: {
            Authorization: `Bearer ${authToken}`,
             'Session-ID': sessionID,
             'User-Email': userDetails.email,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Data received from the server:", data);
          setUserDetails(data);
        } else {
          console.error("Error fetching user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [history, isAuthenticated, userDetails.email]);

  return (
    <div className="viewcontainer">
      <h1>Customer Details</h1>
      <div className="cardContainer">
        {Array.isArray(userDetails) && userDetails.length > 0 ? (
          userDetails.map((user) => {
            if (user.email !== '') {
              return (
                <div key={user._id} className="card">
                  <h2>{user.name}</h2>
                  <p><strong>User ID:</strong> {user.userId}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Function:</strong> {user.functionName}</p>
                  <p><strong>Description:</strong> {user.description}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <p><strong>Phone Number:</strong> {user.phoneno}</p>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p className="noDetailsMsg">No customer details available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewBooking;