import React from 'react';
import {auth} from "../../Util-Functions/config"
// import MapContainer from "./MapContainer";
import "./Contact.css"

export default function Contact() {
    console.log(auth.currentUser)
    return (
        <div id="contact-container">
            {/* <MapContainer /> */}
            <text> this is a placeholder text, all else will come soon</text>
        </div>
    )
}

