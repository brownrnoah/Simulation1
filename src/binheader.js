import React from "react"
import {Link} from "react-router-dom";
import logo from "./images/logo.png"


export default function BinHeader(props) {
    return(
    <div className="binHeader">
        <Link to="/"><div className="binHeader_side1">
            <img src={logo} alt="logo" className="binHeader_logo" />
        </div></Link>
        <div className="binHeader_side2">
            <span>{props.shelf}</span>
        </div>
    </div>
    )
}


