import '../../styles/Cart.css';
import {useContext} from "react";
import {Store} from "../../store/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"


const WidgetCart = ({show, action}) => {

    const [data, setData] = useContext(Store);

    return (
        <div className={`Cart ${show ? 'open' : 'close'}`}>
            <div className="bottonSideCart">
                <button class="closeButton" onClick={action}> X </button>
            </div>
            <div className="centerSideCart">
                {
                    data.qty == 0 ?
                    <div className="emptyCart">
                        <FontAwesomeIcon icon={faBoxOpen} className="iconCart"/>
                        <p className="titleDiv">No Hay Productos en Lista</p> 
                    </div>:
                    <div className="mapDiv">
                        {data.items.map(item => <li className="titleDiv">
                            <div className="">
                                <img src={item.src} alt={item.alt} width="200px" height="130px"/>
                            </div>
                            <div>
                                <h2>{item.item}</h2>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por unidad:<strong>${item.price}</strong></p>
                                <p>Precio total:<strong>${item.price * item.cantidad}</strong></p>
                            </div>
                        </li> )}
                    </div>
                }
            </div>
        </div>
    )
}
export default WidgetCart;