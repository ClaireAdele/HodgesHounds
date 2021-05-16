import React from 'react'
import ImgSrc from "./Images/black&white.png"
import "./App.css"

export default function Banner() {
    return (
        <div id="banner">
            <h1>HODGE'S</h1>
            <img alt="placeholder-banner-img" src={ImgSrc} id="banner-img"/>
            <h1>HOUNDS</h1>
        </div>
    )
}
