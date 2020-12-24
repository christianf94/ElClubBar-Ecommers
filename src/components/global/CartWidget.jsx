import "../../styles/CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
function CartWidget() {
    return (
        <div className="divIcon">
        <a href="www.google.com" className="buttonIcon"><FontAwesomeIcon icon={faShoppingCart} className="Icon"/></a>
        <span> 0 </span>
        </div>
    );
    }

export default  CartWidget;