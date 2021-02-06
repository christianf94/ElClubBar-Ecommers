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

    const addCardItem = () => {
        var found = false
        data.items.forEach(item => {if (item.id === product.id) {
            item.cantidad = item.cantidad + count
        found = true
            setData({
                ...data,
                qty: data.qty + count,
                items: [...data.items],
                totalPrice: data.totalPrice + (product.data.price * count)
            }); 
        } })
        if (found === false){
            setData({
                ...data,
                qty: data.qty + count,
                items: [...data.items,  {...product, cantidad: count}],
                totalPrice: data.totalPrice + (product.data.price * count)
            });
        }
        
        setTimeout(() => {
            alert(`Haz agregado ${count} items al carrito`)
            history.push("/");
        }, 1000) 
    }
    return (
        <div className="containerCount">
            <div className="divCount">
                <button className="buttonCount" onClick={lessCount}  disabled={!count ? "disabled" : null}>-</button>
                <input id="inputCount" type="number" readOnly value={count}/>
                <button className="buttonCount" onClick={() =>  addCount(stock)}>+</button>
            </div>
            <button className="buttonAddItem" disabled={!count ? "disabled" : null } onClick={addCardItem}>Agregar al Carrito</button>
        </div>
    )   
}

export default ItemCount;
