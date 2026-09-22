import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [inputTime, setInputTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(inputTime);
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInputTime(value);
    setTimeLeft(value);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label>Set Time (seconds): </label>
      <input
        type="number"
        value={inputTime}
        onChange={handleChange}
      />

      <h2>Time Left: {timeLeft} seconds</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Countdown;