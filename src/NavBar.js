import React from 'react';
import "./App.css";
import { Link } from "@reach/router";

export default function NavBar() {
    return (
        <div id="navbar">
            <Link to="/" >Home</Link>
            <Link to="/pricing_services" >Pricing and Services</Link>
            <Link to="/contact" >Contact</Link>
        </div>
    )
}
