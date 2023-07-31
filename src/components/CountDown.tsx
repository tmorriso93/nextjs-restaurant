

"use client"
import React from 'react'
import Countdown from 'react-countdown';


const CountDown = () => {
    const endingDate = new Date("10/10/2023").getTime(); // Convert to Unix timestamp
  
    return (
      <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate} />
    );
  };
  
  export default CountDown;

