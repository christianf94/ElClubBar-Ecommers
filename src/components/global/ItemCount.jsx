import React, { useState } from 'react'
import {useHistory} from  "react-router-dom"
import "../../styles/ItemCount.css"

function ItemCount({stock}) {
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
