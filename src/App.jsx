import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const arrivalDate = new Date('2024-07-07');
      const now = new Date();
      const difference = arrivalDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">To Go Home</h1>
        <div className="flex mobile:flex-col pc:flex-row gap-4 justify-center">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-2xl font-semibold">{timeLeft.days}</p>
            <p className="text-gray-500">Days</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-2xl font-semibold">{timeLeft.hours}</p>
            <p className="text-gray-500">Hours</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg ">
            <p className="text-2xl font-semibold">{timeLeft.minutes}</p>
            <p className="text-gray-500">Minutes</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-2xl font-semibold">{timeLeft.seconds}</p>
            <p className="text-gray-500">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
