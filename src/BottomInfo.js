import React from 'react';
import ipetNetwork from "./Images/img_6096.png";

export default function BottomInfo() {
    return (
        <div id="bottom-container">
            <div class="bottom-info">
            
            <h3> Opening Times:</h3>
                <text>Monday: 09am - 5pm</text>
                <text>Tuesday: 09am - 5pm</text>
                <text>Wednesday: 09am - 5pm</text>
                <text>Thursday: 09am - 5pm</text>
                <text>Friday: 09am - 5pm</text>
                <text>Saturday: 09am - 5pm</text>
                <text>Sunday: 09am - 5pm</text>
            </div>

            <div class="bottom-info">
            <h3> Where to find us</h3>
            <text>Hodge's Hounds</text>
            <text>12 Waterside</text>
            <text>Appleton Thorn</text>
            <text>WARRINGTON, Cheshire WA4 3BS</text>
            </div>
            
            <div class="bottom-info">
            <h3>Booking:</h3>
            <text>07000000000</text>
            <text>mark@owner.com</text>
            <a href="https://www.ipetnetwork.co.uk/quality-assurance/policies-and-procedures/"><img src={ipetNetwork} id="iPet"></img></a>
            </div>

        </div>
    )
}
