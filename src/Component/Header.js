import React, {useState, useEffect } from 'react';
import logo from '../Image/GoogleKeep.png';

const Header = () => {

  const [theme, setTheme] = useState("light-theme");

  const toggleMOde = ()=>{
      if(theme === "dark-theme"){
          setTheme("light-theme");
      }else{
        setTheme("dark-theme");
      }
  }

  useEffect(()=>{
    document.body.className = theme;
  },[theme]);

  return (
    <>
        <div className="header">
            <img src={logo} alt="" width="70" height="70" />
            <h1 className='Heading'>My Keep App</h1>
            <button className='modeBtn' onClick={()=> toggleMOde()}>Toggle Mode</button>
        </div>
        
    </>
  )
}

export default Header