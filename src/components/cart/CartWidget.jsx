import "../../styles/CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
function CartWidget() {
    return (
        <div className="divIcon">
        <Link to="/cart" className="buttonIcon"><FontAwesomeIcon icon={faShoppingCart} className="Icon"/></Link>
        <span> 0 </span>
        </div>
    );
    }

export default  CartWidget;