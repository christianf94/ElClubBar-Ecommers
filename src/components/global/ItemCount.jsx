import React, { useState } from 'react'
import "../../styles/ItemCount.css"

function ItemCount({stock}) {
    const [count,setCount] = useState (0);

    const addCount = ([{stock}])  => {
        if(count < stock) {
        setCount(count + 1);}
    }

    const lessCount = () => {
        if(count === 0) return;
        setCount(count - 1);
    }


    return (
        <div className="containerCount">
            <div className="divCount">
                <button className="buttonCount" onClick={() => addCount([{stock}])}>+</button>
                <input type="number" readOnly value={count}/>
                <button className="buttonCount" onClick={() => lessCount()}>-</button>
            </div>
            <button>Agregar Item</button>
        </div>
    )   
}

export default ItemCount;
