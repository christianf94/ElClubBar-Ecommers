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

    /*const getProducts = () => {
        db.collection("product").where("category", "==", "beer").get()
        .then(docs => {
            let arr = []
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e));
    }/
    /*const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productBeer);
        }, 2000) 
    })
*/
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
        //getProducts.then(rta => setItems(rta));
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
                        <div class="loader"></div>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
                }
                
            </section>
        </body>
    )
}

export default ItemListContainer

