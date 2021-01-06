import "../../styles/ItemDetailContainer.css";
import {useEffect, useState} from "react";
import  ItemDetail from "../global/ItemDetail";
import  BeersProductList from "../../productBeer.json"
import {useParams} from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    

    const getproduct = new Promise((resolve, reject) => {
        const selectedProduct = BeersProductList.filter(item => item.id === parseInt(id));
        resolve(selectedProduct[0]);
    })

    const ProductCall = () => {
        getproduct.then((rts) => setProduct(rts))
    }

    useEffect(() => ProductCall(), [])


    return (
        <>
            {
                product ?
                <body>
                    <section className="itemContainer">
                        <ItemDetail item={product}/>
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