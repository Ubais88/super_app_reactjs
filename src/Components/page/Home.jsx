import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('registrationData');
    if (!storedData) {
        navigate("/register")
    }
    setRegistrationData(JSON.parse(storedData));
  }, []);

  return (
    <div>
      <h2>Registration Data:</h2>
      {registrationData ? (
        <ul>
          <li>Name: {registrationData.name}</li>
          <li>Username: {registrationData.userName}</li>
          <li>Email: {registrationData.email}</li>
          <li>Mobile: {registrationData.mobile}</li>
        </ul>
      ) : (
        <p>No registration data found.</p>
      )}
    </div>
  );
}

export default Home;
