import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='name'>Name</div>
            <div className='lastname'>Lastname</div>
            <div className='phone-number'>Phone number</div>
            <div className='actions'>Actions</div>
        </div>
    );
}

export default Header;