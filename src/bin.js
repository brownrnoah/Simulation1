import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import Header from "./header.js";

export default function bin(){
    return(
        <div>
            <Header/>
            <div className="bin_container"> 
                <div className="bin">
                    <Link to="/A"><div><p>Shelf A</p></div></Link>
                    <Link to="/B"><div><p>Shelf B</p></div></Link>
                    <Link to="/C"><div><p>Shelf C</p></div></Link>
                    <Link to="/D"><div><p>Shelf D</p></div></Link>
                </div> 
            </div>
        </div> 
    )
}
