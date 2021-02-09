import "../../styles/Home.css"
import {Link} from "react-router-dom"

function Home() {
 
    return (
    <body className="container">
        <section className="body">
        <div className="leftSide">  
            <div className="sectionA">
                <div className="imgDiv">
                    <img src="https://vinosybuenvivir.com//wp-content/uploads/2020/08/lalisolari-antares-533Bb-e1597156516913.jpg" alt="Beer Section" className="beersSection"></img>
                    <div className="infoDiv">
                        <Link to={`/category/beers`} className="titleDiv">BEER SECTION</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightSide">
            <div className="sectionB">
                <div className="imgDiv2">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_815890-MLC42145027311_062020-O.jpg"  alt="Clothes Section" className="clothesSection"></img>
                    <div className="infoDiv2">
                        <Link to={`/category/clothes`} className="titleDiv2">CLOTHES SECTION</Link>
                    </div>
                </div>
                <div className="imgDiv3">
                    <img src="https://www.circuitogastronomico.com/wp-content/uploads/2017/10/growlers.jpg" alt="Gear Section" className="gearSection"></img>
                    <div className="infoDiv3">
                        <Link to={`/category/gear`} className="titleDiv3">GEAR SECTION</Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </body>
    )   
}

export default Home;

