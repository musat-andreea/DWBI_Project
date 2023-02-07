import React from 'react';

function Contact() {
    return (
        <div id='contact' style={{position: 'relative'}}>
            <h3>Send a Mail</h3>
            <div className='contact-input'>
                <input type='email' placeholder='example@gmail.com'/>
                <a href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Contact;