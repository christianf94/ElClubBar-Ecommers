import "../../styles/CartPage.css"
import {useContext, useState} from "react"
import {Store} from "../../store"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons"
import CartItem from "../cart/CartItem"


function CartPage() {
    const [data, setData] = useContext(Store);

    const resetCart = () => {
        setData({
            items: [],
            qty: 0,
            totalPrice:0,
        }); 
    }

    return ( 
        <body className="cart">
            <h2 className="titleDiv">CART</h2>
            <article className="divCart" >
                <div className="listCart">
                {
                    data.totalPrice == 0 ?
                    <div className="title">
                    <FontAwesomeIcon icon={faBoxOpen} className="icon"/>
                    <p>No Hay Productos en Lista</p>
                    </div>:
                    <div className="itemsDiv">
                        {data.items.map(item =><li class="itemCart">
                        <CartItem
                        key={item.id} 
                        item={item} 
                        id={item.id}     
                        quantity={data.qty}  
                        />
                        </li>)}
                        <div className="">
                            <p>Precio Final:${data.totalPrice}</p>
                        </div>
                        <div className="">
                            <button className="" onClick={()=> resetCart()}>Vaciar Carrito</button>
                            <button className="">Realizar Compra</button>
                        </div>
                    </div>
                }  
                </div>
            </article>
        </body>
    )

}
export default CartPage 