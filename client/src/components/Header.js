import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";


const Header=()=>{
    return (
        <div className="ui two item menu">
            <Link  className="item left" to="/">Twittcher</Link>
            <GoogleAuth className="item center"/>
        </div>
    );
}


export default Header;