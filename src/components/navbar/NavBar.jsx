import React, { useState } from 'react'
import "../../styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import NavItem from "../navbar/NavItem"
import CartWidget from "../cart/CartWidget"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <nav className="navBar">
                <div className="leftSide">
                    <div className="navLogo">
                        <a  href="https://el-club-bar--homepage.web.app"><h1 className ="logoText">El Club Bar</h1></a>
                    </div>
                </div>
                <div className="centerSide">
                    <div className="links" id={showLinks ? "hidden" : " "}> 
                        <NavItem text="HOME" to={`/`}/>
                        <NavItem text="BEERS" to={`/category/beers`}/>
                        <NavItem text="CLOTHES" to={`/category/clothes`}/>
                        <NavItem text="GEAR" to={`/category/gear`}/>
                    </div>
                </div>
                <div className="rightSide">
                    <CartWidget  show={showWidgetCart}  action={openWidgetCart}/>
                    <FontAwesomeIcon icon={faBars} className="iconMenu" onClick={()=> setShowLinks(!showLinks)}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
