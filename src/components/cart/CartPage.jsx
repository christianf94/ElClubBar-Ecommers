import "../../styles/CartPage.css"
import {useContext} from "react"
import {Store} from "../../store"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons"


function CartPage() {
    const [data, setData] = useContext(Store);
    return ( 
        <body className="cart">
            <h2 className="titleDiv">CART</h2>
            <article className="divCart" >
                <div className="listCart">
                {
                    data.qty === 0 ?
                    <div className="title">
                    <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                    <p>No Hay Productos en Lista</p>
                    </div>:
                    <div>
                        {data.items.map(item =><li>
                            <div className="">
                                <img src={item.item.src} alt={item.item.alt} width="300px" height="230px"/>
                            </div>
                            <div>
                                <h2>{item.item.item}</h2>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio por unidad:<strong>${item.item.price}</strong></p>
                                <p>Precio total:<strong>${item.item.price * item.cantidad}</strong></p>
                            </div>
                        </li>)}
                        <div className="">
                            <p>Precio Final:${data.totalPrice}</p>
                        </div>
                    </div>
                }  
                </div>
            </article>
        </body>
    )

}
export default CartPage 