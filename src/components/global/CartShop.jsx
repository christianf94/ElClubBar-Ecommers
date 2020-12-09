import "../../styles/CartShop.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
function CartShop() {
    return (
        <div className="divIcon">
        <a href="www.google.com" className="buttonIcon"><FontAwesomeIcon icon={faShoppingCart} className="Icon"/></a>
        </div>
    );
    }

export default  CartShop;