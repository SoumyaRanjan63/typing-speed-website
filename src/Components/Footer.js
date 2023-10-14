import React from 'react';
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-icons'>
                <a><BsGithub /></a>
                <a><AiFillLinkedin /></a>
                <a><MdAttachEmail /></a>
                <a><AiFillInstagram /></a>
            </div>
            <select className='theme custom-select '>
                <option value="Darken-black">Darken-black</option>
                <option value="coloured-grey">coloured-grey</option>
                <option value="coloured-pink">coloured-pink</option>
                <option value="coloured-green">coloured-green</option>
                <option value="coloured-blue">coloured-blue</option>
                <option value="coloured-lightpurple">coloured-lightpurple</option>
                <option value="lighten-white">lighten-white</option>
            </select>
        </div>
    );
}

export default Footer;

