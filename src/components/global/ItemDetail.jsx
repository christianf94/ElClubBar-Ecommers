import "../../styles/ItemDetail.css"
import ItemCount from "../global/ItemCount"

const ItemDetail = ({item}) => {
    return(
        <>
        <article>
            <div>
                <div>
                    <img src={item.img} alt="Cerveza Minga Pack x6 Mix"></img>
                </div>
                <div>
                    <h1>{item.nombre}</h1>
                    <p>{item.detail}</p>
                    <h5>{item.price}</h5>
                </div>
            </div>
            <ItemCount/>
        </article>
        </>
    )
}


export default ItemDetail;