import React from 'react'
import ImgSrc from "./Images/black&white.png"
import "./App.css"

export default function Banner() {
    return (
        <div id="banner">
            <img alt="placeholder-banner-img" src={ImgSrc} id="banner-img"/>
        </div>
    )
}
