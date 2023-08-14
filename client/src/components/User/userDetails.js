import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./userDetails.css";

function AdminPage() {
  const [userDetails, setUserDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('/api/all-user-details')
      .then(response => response.json())
      .then(data => setUserDetails(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    history.push('/admin');
  };

  return (
    <>
    <div className="admin-container">
      <h2>All User Records</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phoneno}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
    </>
    
  );
}

export default AdminPage;
