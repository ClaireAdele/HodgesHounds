import React from 'react';
import {auth} from "../../Util-Functions/config"
import {GoogleMaps} from "./MapContainer";
import "./Contact.css"

export default function Contact() {
    return (
        <div id="contact-container">
            <GoogleMaps /> 
            <text> this is a placeholder text, all else will come soon</text>
        </div>
    )
}

