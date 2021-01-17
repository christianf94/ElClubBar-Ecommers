import "../../styles/CartWidget.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Store} from "../../store/index";
import {useContext} from "react";
import Cart from "../cart/Cart";

function CartWidget({action, show}) {

    const [data, setData] = useContext(Store);

    return (
    <>
    <Cart show={show} action={action}/>
    <div className="divIcon" onClick={action}>
        <div to="/cart" className="buttonIcon"><FontAwesomeIcon icon={faShoppingCart} className="Icon"/></div>
        <span>{data.qty}</span>
    </div>
    </>
    );
    }

export default  CartWidget;