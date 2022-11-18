import React from 'react';
import logo from '../Image/GoogleKeep.png';

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="" width="70" height="70" />
            <h1 className='Heading'>My Keep App</h1>
        </div>
    </>
  )
}

export default Header