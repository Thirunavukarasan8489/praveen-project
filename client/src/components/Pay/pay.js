import React, { useState } from 'react';
import './pay.css'; // Create a Pay.css file for styling
import Footer from '../NavBar/Footer';
import { useHistory } from 'react-router-dom';

const Pay = ({ userId }) => {
  const history = useHistory();
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/pay/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, customerName, amount, cardNumber, cvv }), // Include userId in the request body
      });

      const data = await response.json();
      setPaymentStatus(data.message);

      if (response.ok) {
        setTimeout(() => {
          alert('Payment successful!');
          history.push('/welcome'); // Replace with your actual welcome page route
        }, 1000);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <>
      <div className="payment-container">
        <h1 className='cust'>Customer Payment Here</h1>
        <div className="input-container">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
          />
        </div>
        <div className="input-container">
          <label htmlFor="customerName">Card Holder Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="cardNumber">Debit/Credit Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="cvv">Enter CVV Number:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
        <p className="payment-status">{paymentStatus}</p>
      </div>
      <Footer />
    </>
  );
};

export default Pay;
