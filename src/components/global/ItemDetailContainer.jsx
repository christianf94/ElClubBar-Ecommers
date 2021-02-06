import "../../styles/ItemDetailContainer.css";
import {useEffect, useState} from "react";
import  ItemDetail from "../global/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestone} from "../../db/index.js";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestone();
/*
    const getproduct = new Promise((resolve, reject) => {
        const selectedProduct = BeersProductList.filter(items => items.id === parseInt(id));
        resolve(selectedProduct[0]);
    })

    const ProductCall = () => {
        getproduct.then((rts) => setProduct(rts))
    }
    */

    useEffect(() =>  {
        db.collection("product").doc(id).get()
        .then(response => {
            if(response.exists) {
                setProduct({id:response.id, data:response.data()});
            }
        })
        //ProductCall(), [])
        .catch(e => console.log(e));
    }, []);

    return (
        <>
            {
                product ?
                <body>
                    <section className="itemContainer">
                        <ItemDetail key={id}
                            item={product} 
                            id={product.id}                
                            src={product.data.src}
                            name={product.data.item}
                            detail={product.data.detail}
                            price={product.data.price}
                            stock={product.data.stocks}
                            alt={product.data.alt}/>
                    </section>
                </body> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                            <div class="loader"></div>
                        </div>
                    </article>
            }
        </> 
    )
}
export default ItemDetailContainer