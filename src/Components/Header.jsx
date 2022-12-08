import React from 'react';
import Navbar from "./Navbar";
function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Welcome</span> to your health journal!</h1>
                <p className='details'>Lorem ipsum dolor sit amet cosectetur adipiscing elit. Magni, blanditilis!</p>
                <a href='#' className='cv-btn'>New appointment</a>
            </div>
        </div>
    )
}

export default Header;


