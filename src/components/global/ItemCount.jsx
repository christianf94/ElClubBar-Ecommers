import React, { useState, useContext} from 'react'
import {useHistory} from  "react-router-dom"
import {Store} from "../../store/index"
import "../../styles/ItemCount.css"

function ItemCount({stock, product}) {

    const [data, setData] = useContext(Store);
    const [count,setCount] = useState (0);
    const history = useHistory ()

    const addCount = (stock)  => {
        if(count < stock) {
        setCount(count + 1);}
    }

    const lessCount = () => {
        if(count === 0) return;
        setCount(count - 1);
    }

    const AddCardItem = () => {
        setData({
            ...data, 
            qty: data.qty + count,
            items: [...data.items,  {item: product, cantidad: count}],
            totalPrice: data.totalPrice + (product.price * count)
        });
        setTimeout(() => {
            alert(`Haz agregado ${count} items al carrito`)
            history.push("/cart");
        }, 1000) 
    }
    return (
        <div className="containerCount">
            <div className="divCount">
                <button className="buttonCount" onClick={lessCount}  disabled={!count ? "disabled" : null}>-</button>
                <input id="inputCount" type="number" readOnly value={count}/>
                <button className="buttonCount" onClick={() =>  addCount(stock)}>+</button>
            </div>
            <button className="buttonAddItem" disabled={!count ? "disabled" : null } onClick={AddCardItem}>Agregar al Carrito</button>
        </div>
    )   
}

export default ItemCount;
