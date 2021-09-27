import React from 'react';
import {auth} from "../../Util-Functions/config"
import {GoogleMaps} from "./MapContainer";
import "./Contact.css"

export default function Contact() {
    
    return (
        <div>
        <h1>Contact and Booking</h1>
        <div id="contact-container">
            <GoogleMaps /> 
            <div>
            <p>We accept booking over the phone or by e-mail.</p>
            <p>07123456789</p>
            <p>hodgeshounds@owner.com</p>
            </div>
        </div>
        </div>
    )
}

