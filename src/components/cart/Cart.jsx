import '../../styles/Cart.css';
import {useContext} from "react";
import {Store} from "../../store/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from  "react-router-dom"



const WidgetCart = ({show, action}) => {

    const [data, setData] = useContext(Store);
    const history = useHistory ()


    const resetCart = () => {
        setData({
            items: [],
            qty: 0,
            totalPrice:0,
        }); 
    }

    const redirectCart = () => {
        history.push("/cart");
    }

    return (
        <div className={`Cart ${show ? 'open' : 'close'}`}>
            <div className="bottonSideCart">
                <button className="closeButton" onClick={action}> X </button>
            </div>
            <div className="centerSideCart">
                {
                    data.totalPrice === 0 ?
                    <div className="emptyCart">
                        <FontAwesomeIcon icon={faBoxOpen} className="iconCart"/>
                        <p className="titleDiv">No Hay Productos en Lista</p> 
                    </div>:
                    <div className="mapDiv">
                        {data.items.map(item => 
                        <div className="itemDiv">
                            <div className="infoLeft">
                                <div className="imgDiv">
                                    <img src={item.data.src} alt={item.data.alt} width="165px" height="126px"/>
                                </div>
                            </div>
                            <div className="infoRigt">
                                <div className="containerInfo">
                                    <div className="titleDiv">
                                        <h2>{item.data.item}</h2>
                                    </div>
                                    <div className="detailDiv">
                                        <p>Cantidad: <strong>{item.cantidad}</strong></p>
                                        <p>Precio por unidad: <strong>${item.data.price}</strong></p>
                                        <p>Precio total: <strong>${item.data.price * item.cantidad}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div> )}
                    </div>
                }
            </div>
            <div className="totalPriceDiv">
                            <p>Precio Final: ${data.totalPrice}</p>
            </div>
            <div className="buttonsContainer">
                    <button className="button" onClick={()=> redirectCart()}>Ver Carrito</button>
                    <button className="button" onClick={()=> resetCart()}>Vaciar Carrito</button>
            </div>
        </div>
    )
}
export default WidgetCart;