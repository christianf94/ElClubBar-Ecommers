import "../../styles/CartPage.css"
import {useContext} from "react"
import {Store} from "../../store"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons"
import {useHistory} from  "react-router-dom"
import CartItem from "../cart/CartItem"


function CartPage() {
    const history = useHistory ()
    const [data, setData] = useContext(Store);

    const resetCart = () => {
        setData({
            items: [],
            qty: 0,
            totalPrice:0,
        }); 
    }
    

    const redirectCheckOut = () => {
        history.push("/checkout");
    }

    return ( 
        <body className="cart">
            <h2 className="titleDiv">CART</h2>
            <article className="divCart" >
                <div className="listCart">
                {
                    data.totalPrice === 0 ?
                    <div className="title" >
                    <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                    <p>No Hay Productos en Lista</p>
                    </div>:
                    
                    <div className="itemsDiv">
                        {data.items.map(item =>
                        <div class="itemCart" key={item.id}>
                            <CartItem
                            key={item.id} 
                            item={item} 
                            id={item.id}     
                            quantity={item.cantidad}  
                            />
                        </div>)}
                    </div>
                }  
                </div>
                <div className="priceBar{">
                    <div className="totalPriceDiv">
                        <p>Precio Final: $<strong>{data.totalPrice}</strong></p>
                        <div className="buttonsContainer">
                            <button className="buttom" onClick={()=> resetCart()}>Vaciar Carrito</button>
                            <button className={!data.totalPrice ? "buttomOff": "buttom"} disabled={!data.totalPrice ? "disabled" : null } onClick={()=> redirectCheckOut()} >Realizar Compra</button>
                        </div>
                </div>
                </div>
            </article>
        </body>
    )

}
export default CartPage 