import "../../styles/ItemCard.css"
import {Link} from "react-router-dom"

const ItemListContainer= ({src,alt,item,price,id}) => (
    <Link to={`/item/${id}`}>
        <div className="cardItem">
            <div className="imageDiv">
                <img src={src} alt={alt} width="300px" height="230px"/>
            </div>
            <div className="infoDiv"> 
                <div className="titleDiv">
                    <h3>{item}</h3>
                </div>
                <div className="priceDiv">
                    <strong><p>${price}</p></strong>
                </div>
            </div>
        </div>
    </Link>
    
)
export default ItemListContainer;

/*
<li>
<a href={url}>{text}</a>
</li>
*/