import '../../styles/Cart.css';
import {useContext} from "react";
import {Store} from "../../store/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";


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
                        {data.items.map(item => <li>
                            <div className="">
                                <img src={item.item.src} alt={item.item.alt} width="300px" height="230px"/>
                            </div>
                            <div>
                                <h2>{item.item.item}</h2>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por unidad:<strong>${item.item.price}</strong></p>
                                <p>Precio total:<strong>${item.item.price * item.cantidad}</strong></p>
                            </div>
                        </li> )}
                    </div>
                }
            </div>
        </div>
    )
}
export default WidgetCart;