import React from 'react'
import {useState , useEffect} from "react"  
import "../../styles/ItemListContainer.css"
import ItemCard from "../global/ItemCard"
import productBeer from "../../productBeer.json"

function Body() {

    const [items, setItems] = useState ([])



    const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productBeer);
        }, 2000)
    })

    useEffect(()=> {
        getProducts.then(rta => setItems(rta));
    })

    return ( 
        <body className="container">
            <section className="itemContainer">
                {
                    items.length ? 
                    <article className="divItems">
                        {
                            items.map(items => (
                                <ItemCard 
                                    key={items.id}
                                    src={items.src} 
                                    alt={items.alt} 
                                    item={items.item} 
                                    price={items.price} 
                                    stocks={items.stocks}
                                /> ))
                        }
                    </article> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                            <span class="pulseA"></span>
                            <span class="pulseB"></span>
                            <span class="pulseC"></span>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
                }
                
            </section>
        </body>
    )
}

export default Body

