import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-22T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.days}</span>
          <p className="countdown-label">일</p>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours}</span>
          <p className="countdown-label">시간</p>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <p className="countdown-label">분</p>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <p className="countdown-label">초</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
