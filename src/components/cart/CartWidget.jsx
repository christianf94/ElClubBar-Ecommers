import "../../styles/CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Cart from "../cart/Cart"
function CartWidget({action, show}) {

    return (
    <>
    <Cart show={show} action={action}/>
    <div className="divIcon" onClick={action}>
        <div to="/cart" className="buttonIcon"><FontAwesomeIcon icon={faShoppingCart} className="Icon"/></div>
        <span> 0 </span>
    </div>
    </>
    );
    }

export default  CartWidget;