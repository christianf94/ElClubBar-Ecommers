import '../../styles/Cart.css';


const WidgetCart = ({show, action}) => {

    return (
        <div className={`Cart ${show ? 'open' : 'close'}`}>
            <div className="bottonSideCart">
                <button class="closeButton" onClick={action}> X </button>
            </div>
            <div className="centerSideCart">
                <p className="titleDiv">No Hay Productos en Lista</p>
            </div>
        </div>
    )
}
export default WidgetCart;