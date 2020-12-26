import React, { useState } from 'react'
import "../../styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import NavItem from "../navbar/NavItem"
import CartWidget from "../global/CartWidget"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="navBar">
            <div className="leftSide">
                <div className="navLogo">
                    <a href="app.jsx"><h1 className ="logoText">El Club Bar</h1></a>
                </div>
            </div>
            <div className="centerSide">
                <div className="links" id={showLinks ? "hidden" : " "}> 
                    <NavItem text="HOME" url=""/>
                    <NavItem text="BEERS" url=""/>
                    <NavItem text="CLOTHES" url=""/>
                    <NavItem text="GEAR" url=""/>
                    <NavItem text="USER" url=""/>
                    <NavItem text="CONTACT" url=""/>
                </div>
            </div>
            <div className="rightSide">
                <CartWidget />
                <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={()=> setShowLinks(!showLinks)}/>
            </div>
        </nav>
    )
}

export default Navbar

/* RECORDATORIO: DIVIDIR EL NAV EN 3 NO EN 2 PARTES PARA ORGANIZAR MEJOR LA NAVBAR*/