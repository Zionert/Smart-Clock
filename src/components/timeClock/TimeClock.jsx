import React, { useState, useEffect } from 'react'
import '../timeClock/TimeClock.scss'
function TimeClock() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []); 

  const formatTimeSegment = (segment) => {
    return segment < 10 ? `0${segment}` : segment;
  };

  const hours = formatTimeSegment(time.getHours());
  const minutes = formatTimeSegment(time.getMinutes());
  const seconds = formatTimeSegment(time.getSeconds());

  
  return (
    <div className='clock-container'>
       <div className='right-border'>
          <p>{hours}</p>
          <p className='clock-label'>hours</p>
      </div>
      <div className='right-border'>
          <p>{minutes}</p>
          <p className='clock-label'>minutes</p>
      </div>
      <div>
          <p>{seconds}</p>
          <p className='clock-label'>seconds</p>
      </div>
    </div>
  )
}

export default TimeClock