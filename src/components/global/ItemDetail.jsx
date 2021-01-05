import "../../styles/ItemDetail.css"
import ItemCount from "../global/ItemCount"

const ItemDetail = ({item}) => {
    return(
        <>
        <article className="container">
            <div className="detailDiv"> 
                <div className="imageDiv">
                    <img src={item.src} alt={item.alt} className="itemImg"></img>
                </div>
                <div className="infoDiv">
                    <h1 className="itemName">{item.nombre}</h1>
                    <p className="itemDetail">{item.detail}</p>
                    <p className="itemPrice">{item.price}</p>
                    <div className="itemCount">
                        <ItemCount stock={item.stocks}/>
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}


export default ItemDetail;