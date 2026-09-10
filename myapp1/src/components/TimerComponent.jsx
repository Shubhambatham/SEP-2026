import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. MOUNTING: This runs ONCE when the component appears on the screen
    console.log(' Component mounted! Timer started.');

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // 3. UNMOUNTING: This cleanup function runs right before the component disappears
    return () => {
      console.log('Component unmounted! Cleaning up timer.');
      clearInterval(interval);
    };
  }, []); // Empty array means: only run on mount and unmount

  // 2. UPDATING: This runs every time the 'seconds' state changes
  useEffect(() => {
    if (seconds > 0) {
      console.log(` Component updated! Seconds elapsed: ${seconds}`);
    }
  }, [seconds]); // Runs whenever 'seconds' updates

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Time Elapsed: {seconds}s</h2>
    </div>
  );
}

export default TimerComponent;
