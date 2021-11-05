import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

export default function Header() {
    const divStyle = {
        backgroundColor: "#3dc4fc",
        height: "80px"
    }
    return (
        <div id="header" style={divStyle}>
        <Link to="/">
            <i class="fas fa-home fa-3x" ></i>
            </Link>
        </div>
    )
}
