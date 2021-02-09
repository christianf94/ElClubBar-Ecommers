import React, {useContext, useState} from 'react';
import {Store} from '../../store/index';
import "../../styles/CartItem.css"

const CartItem = ({key,item,id,quantity}) => {
    const [data, setData]= useContext(Store);
    const [qtyParcial, setQtyParcial]= useState(quantity)

    function onRemove(){
        const find = data.items.find((prod) => prod.id === id);
        const filter = data.items.filter((prod) => prod.id !== id);
        setData({ 
            ...data, 
            items: filter,
            qty: data.qty - quantity,
            totalPrice: data.totalPrice - (find.data.price*find.cantidad)
        });
        setQtyParcial(qtyParcial-data.qty)
    }

    return (
        <div className="cartContainer">
            <div className="leftDiv" key={key}>
                <div className="imgDiv">
                    <img src={item.data.src} alt={item.data.alt} width="300px" height="220px"/>
                </div>
            </div>
            <div className="rightDive">
                <div className="nameDiv">
                    <h2>{item.data.item}</h2>
                </div>
                <div className="infoDiv">
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio por unidad:<strong>${item.data.price}</strong></p>
                    <p>Precio total:<strong>${item.data.price * item.cantidad}</strong></p>
                </div>
            </div>
                <button className="closeButton" onClick ={() => onRemove(item.id)}>X</button>
        </div>
        );
    }

    export default CartItem;