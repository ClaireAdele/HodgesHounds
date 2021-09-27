import React from 'react';
import ipetNetwork from "./Images/img_6096.png";

export default function BottomInfo() {
    return (
        <div id="bottom-container">

<div class="bottom-info" id="opening-times">
            <h3> Opening Times:</h3>
            <table>
                <tr><td>Monday: 09am - 5pm</td></tr>
                <tr><td>Tuesday: 09am - 5pm</td></tr>
                <tr><td>Wednesday: 09am - 5pm</td></tr>                
                <tr><td>Thursday: 09am - 5pm</td></tr>
                <tr><td>Friday: 09am - 5pm</td></tr>
                <tr><td>Saturday: 09am - 5pm</td></tr>
                <tr><td>Sunday: 09am - 5pm</td></tr>
            </table>
            </div>
            
            <div class="bottom-info">
            <h3> Where to find us</h3>
            <text>Hodge's Hounds</text>
            <text>12 English Street</text>
            <text>LABRADORTOWN, Cheshire WO0 F00</text>
            </div>
            
            <div class="bottom-info">
            <h3>Booking:</h3>
            <text>07000000000</text>
            <text>hodgeshounds@owner.com</text>
            </div>

            <div class="bottom-info" id="img-link">
            <a href="https://www.ipetnetwork.co.uk/quality-assurance/policies-and-procedures/"><img src={ipetNetwork} id="iPet"></img></a>
            </div>            
        </div>
    )
}
