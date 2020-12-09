import React, { useState } from 'react'
import "../../styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import NavItem from "../navbar/NavItem"
import CartShop from "../global/CartShop"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className="navBar">
            <div className="leftSide">
                <div className="navLogo">
                    <a href="app.jsx"><h1 className ="logoText">El Club Bar</h1></a>
                </div>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : " "}> 
                    <NavItem text="HOME" url=""/>
                    <NavItem text="BEERS" url=""/>
                    <NavItem text="GIFTS" url=""/>
                    <NavItem text="GEAR" url=""/>
                    <NavItem text="USER" url=""/>
                    <NavItem text="CONTACT" url=""/>
                </div>
                <CartShop />
                <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={()=> setShowLinks(!showLinks)}/>
            </div>
        </nav>
    )
}

export default Navbar
////{showLinks ? "hidden" : ""}>