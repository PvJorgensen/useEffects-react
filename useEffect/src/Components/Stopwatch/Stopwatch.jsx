import React, { useState, useEffect } from 'react';
import './Stopwatch.scss';

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const seconds = (milliseconds / 1000).toFixed(2);
    return seconds;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className={`watch-face ${isRunning ? 'running' : ''}`}>
        {formatTime(time)}
      </div>
      <div className="button-container">
        <button onClick={handleStartStop} className={isRunning ? 'stop' : 'start'}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};
