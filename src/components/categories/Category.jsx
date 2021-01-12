import {useParams} from "react-router-dom"
import "../../styles/Category.css"
import BeerListContainer from "./BeerListContainer"
import ClothesListContainer from "./ClothesListContainer"
import Error404 from "../global/Error404"

const Category =() => {
    const {category_name} = useParams();

    const categorySelection = (category) => {
        switch(category){
            case "beers": return (
                <article className="container">
                    <div className="titleSection">
                        <h2>BEERS</h2>
                    </div>
                    <BeerListContainer/>
                </article>
            )
            case "clothes": return (
                <article className="container">
                    <div className="titleSection">
                        <h2>CLOTHES</h2>
                    </div>
                    <ClothesListContainer/>
                </article>
            )

            case "gear": return (
                <article className="container">
                <div className="titleSection">
                    <h2>GEAR</h2>
                </div>
                
            </article>
            )

            default: return (
                <article className="container">
                    <Error404/>
                </article>
            )
            
        }
    }

    return (
        <>
            {
            categorySelection(category_name)
            }
        </>
    )
}

export default Category;