import React from 'react';
import './App.css';
import logo from "./images/logo.png"

export default function Header(){
    return(
        <div className="header">
            <div className="logo_box">
                <img src={logo} alt="logo" className="header_logo"/>
                <span className="header_text">SHELFIE</span> 
            </div> 
        </div>
    )
}
