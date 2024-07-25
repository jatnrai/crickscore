// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Countdown({ startTime, onEnd }) {
  const [timeRemaining, setTimeRemaining] = useState('Calculating...');

  const CountdownText = {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: '13px',
    backgroundColor: '#f016160f',
    width: '75px',
    margin: "0 auto",
    padding: '.4rem .6rem',
    borderRadius: '.3rem'
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const start = new Date(startTime);
      const istOffset = 5.5 * 60 * 60 * 1000; // IST is +5:30 hours ahead of UTC
      const startInIST = new Date(start.getTime() + istOffset);
      const diff = startInIST - now;

      if (diff <= 0) {
        setTimeRemaining('0s');
        onEnd();
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        let timeString = '';

        switch (true) {
          case days > 0:
            timeString = `${days}d ${hours}h`;
            break;
          case hours > 0:
            timeString = `${hours}h ${minutes}m`;
            break;
          case minutes > 0:
            timeString = `${minutes}m ${seconds}s`;
            break;
          default:
            timeString = `${seconds}s`;
            break;
        }

        setTimeRemaining(timeString.trim());
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [startTime, onEnd]);

  return <Card.Text style={CountdownText}>{timeRemaining}</Card.Text>;
}

export default Countdown;