import React from 'react';
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <nav>
            <div>
                <h1>TypeCat</h1>
                 
            </div>
            <div><FaUser/></div>
            </nav>
            <header>
                <div><p>60s</p></div>
                <div>
                <p>15s</p>
                <p>30s</p>
                <p>60s</p>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
