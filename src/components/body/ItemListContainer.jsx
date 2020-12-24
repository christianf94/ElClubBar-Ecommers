import React from 'react'
import {useState , useEffect} from "react"  
import "../../styles/ItemListContainer.css"
import ItemCard from "../global/ItemCard"
import productBeer from "../../productBeer.json"

function Body() {

    const [item, setItems] = useState ([])



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
                    item.length ? 
                    <article className="divItems">
                        {
                            item.map(item => (
                                <ItemCard 
                                    key={item.id}
                                    src={item.src} 
                                    alt={item.alt} 
                                    item={item.item} 
                                    price={item.price} 
                                    stocks={item.stocks}
                                /> ))
                        }
                    </article> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                            <span className="pulse"></span>
                            <span className="pulse"></span>
                            <span className="pulse"></span>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
                }
                
            </section>
        </body>
    )
}

export default Body

