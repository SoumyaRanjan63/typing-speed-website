import React, { useState, useRef } from 'react';
import { ImKeyboard } from 'react-icons/im';
import { BiSolidUserCircle } from 'react-icons/bi';

const Navbar = (props) => {
  const { setTimer, setCounting ,timer} = props; // Destructure the props
//   console.log(props.timer);

  const intervalRef = useRef(null);
  document.title = 'TestWeb';

  const handleTimer = (time) => {
    // console.log("working")
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(time);
    setCounting(true);

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(intervalRef.current);
          setCounting(false);
          return time; // Reset the timer to the original time
        }
      });
    }, 1000);
  };

  return (
    <div className='main'>
      <nav className='navbar'>
        <div>
          <h1>TypeCat <ImKeyboard /></h1>
        </div>
        <div className='user-container'><BiSolidUserCircle /></div>
      </nav>
      <header>
        <div className="count-timer">{props.timer} </div>
        <div className='chose-timer'>
          <button onClick={() => handleTimer(15)}>15s</button>
          <button onClick={() => handleTimer(30)}>30s</button>
          <button onClick={() => handleTimer(60)}>60s</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
