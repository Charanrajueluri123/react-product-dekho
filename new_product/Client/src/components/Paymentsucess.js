// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/paymentsucess.css'
import tick from'../images/404-tick.png';

const Paymentsucess = () =>{

    const navigate=useNavigate();

    const handleClose = (e) =>{
        e.preventDefault();
        navigate('/');
    }

   
    return(
        <div className="container">
          <div className="charan">
            <img src={tick} alt="sdvs"/>
            <h2>Thank You!</h2>
            <p>Your Details have been succesfully submitted Thanks!</p>
            <button type="button" onClick={handleClose}> OK </button>
          </div>
        </div>
    )
}
export default Paymentsucess;
 