import {useParams} from "react-router-dom"
import "../../styles/Category.css"
import ItemListContainer from "./ItemListContainer"

const Category =() => {
    const {category_name} = useParams()
    return (
        <article className="container">
                <div className="titleSection">
                    <h2>{category_name}</h2>
                </div> 
                <ItemListContainer/>
        </article>
    )
}

export default Category;