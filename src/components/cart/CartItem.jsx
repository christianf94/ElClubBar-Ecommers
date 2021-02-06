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
        <div>
            <div>
                <button onClick ={() => onRemove(item.id)}>X</button>
            </div>
            <div className="">
                <img src={item.data.src} alt={item.data.alt} width="300px" height="230px"/>
            </div>
            <div>
                <h2>{item.data.item}</h2>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio por unidad:<strong>${item.data.price}</strong></p>
                <p>Precio total:<strong>${item.data.price * item.cantidad}</strong></p>
            </div>
        </div>
        );
    }

    export default CartItem;