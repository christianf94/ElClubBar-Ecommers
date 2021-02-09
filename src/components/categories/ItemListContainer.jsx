import React from 'react';
import {useState , useEffect} from "react";
import ItemCard from "../global/ItemCard";
import {getFirestone} from "../../db/index.js";
import {useParams} from "react-router-dom"
import "../../styles/ItemListContainer.css"

function ItemListContainer() {

    const [item, setItems] = useState ([]);
    const db = getFirestone();
    const {category_name} = useParams();

    useEffect(()=> {
        if(category_name) {
            db.collection('product').where('category', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setItems(arr);
            })
        }
    },[category_name])

    return ( 
        <body className="container">
            <section className="itemContainer">
                {
                    item.length ? 
                    <article className="divItems">
                        {
                            item.map(item => (
                                <ItemCard 
                                    id={item.id}
                                    src={item.data.src} 
                                    alt={item.data.alt} 
                                    item={item.data.item} 
                                    price={item.data.price} 
                                    stocks={item.data.stocks}
                                    
                                /> ))
                        }
                    </article> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                        <div className="loader"></div>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
                }
                
            </section>
        </body>
    )
}

export default ItemListContainer

