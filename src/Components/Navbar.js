import React from 'react';
import { FaUser } from "react-icons/fa6";
import { ImKeyboard } from "react-icons/im";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='main'>
            <nav className='navbar'>
            <div>
                <h1>TypeCat <ImKeyboard/></h1>
            </div>
            <div className='user-container'><BiSolidUserCircle /></div>
            </nav>
            <header>
                <div className="count-timer"><p>60</p></div>
                <div className='chose-timer'>
                    <p>15s</p>
                    <p>30s</p>
                    <p>60s</p>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
