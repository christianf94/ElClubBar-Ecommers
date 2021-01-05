import React, { useState } from 'react'
import "../../styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import NavItem from "../navbar/NavItem"
import CartWidget from "../cart/CartWidget"
function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            <nav className="navBar">
                <div className="leftSide">
                    <div className="navLogo">
                        <a  href="https://elclubbar.000webhostapp.com/index.html"><h1 className ="logoText">El Club Bar</h1></a>
                    </div>
                </div>
                <div className="centerSide">
                    <div className="links" id={showLinks ? "hidden" : " "}> 
                        <NavItem text="HOME" to={`/`}/>
                        <NavItem text="BEERS" to={`/category/beers`}/>
                        <NavItem text="CLOTHES" to={`/category/clothes`}/>
                        <NavItem text="GEAR" to={`/category/gear`}/>
                        <NavItem text="USER" to={`/user`}/>
                        <NavItem text="CONTACT" to={`/contact`}/>
                    </div>
                </div>
                <div className="rightSide">
                    <CartWidget/>
                    <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={()=> setShowLinks(!showLinks)}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
