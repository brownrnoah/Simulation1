import React from "react";
import {Route, Switch} from "react-router-dom";
import App from './App.js';
import './App.css';
import BinA from "./components/BinA.js";
import BinB from "./components/BinB.js";
import BinC from "./components/BinC.js";
import BinD from "./components/BinD.js";
import Bin from "./bin.js";
import Header from "./header.js";


export default function Routes(){
    return (
        <div>
            {/* <Header/> */}
            <div>
                <Switch>
                    <Route path="/" component={Bin} exact/>
                    <Route path='/A' component={BinA}/>
                    <Route path='/B' component={BinB}/>
                    <Route path='/C' component={BinC}/>
                    <Route path='/D' component={BinD}/>
                </Switch>
            </div> 
        </div> 
    )
}