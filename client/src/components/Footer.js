import React from "react";

const Footer=()=>{
    return (
        <div className="ui header" style={{backgroundColor:"black",textAlign:"center" , padding:"20" , width:"100%" ,bottom:"0" ,left:"0",position:"fixed"}}>
            <div  style={{color:"red"}}>Copyright @ {new Date().getFullYear()}</div>
            <div  style={{color:"red"}}>Made with ❤❤❤ by Himanshu Judge</div>   
        </div>
    );
}

export default Footer;