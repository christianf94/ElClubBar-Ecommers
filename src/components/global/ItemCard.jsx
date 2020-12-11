import "../../styles/ItemCard.css"
const ItemListContainer= ({src,alt,item,price}) => (
    <div className="cardItem">
        <div className="imageDiv">
            <img src={src} alt={alt} width="300px" height="230px"/>
        </div>
        <div className="infoDiv">
            <div className="titleDiv">
                <h3>{item}</h3>
            </div>
            <div className="priceDiv">
                <p>{price}</p>
            </div>
        </div>
    </div>
)
export default ItemListContainer;

/*
<li>
<a href={url}>{text}</a>
</li>
*/