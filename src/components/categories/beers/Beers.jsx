import "../../../styles/Beers.css"
import ItemListContainer from "../../global/ItemListContainer"
import ItemDetailContainer from "../../global/ItemDetailContainer"

function Beers() {
    return (
        <body className="container">
            <div className="titleSection">
                <h2>BEER SECTION</h2>
            </div>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </body>
    )
}

export default Beers
