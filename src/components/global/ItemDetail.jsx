import "../../styles/ItemDetail.css"
import ItemCount from "../global/ItemCount"
import {useEffect} from "react";

const ItemDetail = ({item,id, src,name,detail,price,stock,alt}) => {

    const ProductCall = () => {
    console.log(item)
    }

    useEffect(() =>  {ProductCall()},[])
    return(
        <>
        <article className="container">
            <div className="detailDiv"> 
                <div className="imageDiv">
                    <img src={src} alt={alt} className="itemImg"></img>
                </div>
                <div className="infoDiv">
                    <h1 className="itemName">{name}</h1>
                    <p className="itemDetail">{detail}</p>
                    <p className="itemPrice"><strong>${price}</strong></p>
                    <div className="itemCount">
                        <ItemCount stock={stock} product={item}/>
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}


export default ItemDetail;