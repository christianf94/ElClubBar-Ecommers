import "../../styles/ItemDetailContainer.css"
import {useEffect, useState} from "react";
import  ItemDetail from "../global/ItemDetail"
import productBeer from "../../productBeer.json"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const getproduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id:1,
                nombre:"CERVEZA MINGA MEGA MIX PACK X6",
                img:"https://cdn.shopify.com/s/files/1/0287/0322/7979/products/MingaMix.jpg?v=1588704208",
                alt: "Cerveza Minga Pack x6 Mix",
                price:"$990",
                detail:"Pack de 6 latas de cerveza Minga que incluye: *1 German Pills 473ml (5% ABV 30 IBU), *1 #NonStopIpa 473ml (5% AB 56 IBU), *1 Amber Lager 473ml (5% ABV 20 IBU), *1 DosBondis APA 473ml (5,7% ABV 40 IBU), *1 Juicy Lite IPA 473ml (5% ABV), *1 Tornado Stout 473ml (6.5% ABV 60 IBU)",
                stocks:23,
            })
        }, 2000);
    })

    useEffect(() => {
        getproduct.then(response => setProduct(response));
    }, [])


    return (
        <>
            {
                product ?
                <>
                <ItemDetail item={product}/>
                </> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                            <div class="loader"></div>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
            }
        </> 
    )
}
export default ItemDetailContainer