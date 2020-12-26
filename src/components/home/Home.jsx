import "../../styles/Home.css"

function Home() {

    return (
    <body className="container">
        <section className="body">
        <div className="leftSide">
            <div className="sectionA">
                <img src="https://vinosybuenvivir.com//wp-content/uploads/2020/08/lalisolari-antares-533Bb-e1597156516913.jpg" alt="" className="beersSection"></img>
            </div>
        </div>
        <div className="rightSide">
            <div className="sectionB">
                <img src="https://http2.mlstatic.com/D_NQ_NP_815890-MLC42145027311_062020-O.jpg"  alt="" className="clothesSection" width="500px" height="300px"></img>
                <img src="https://www.circuitogastronomico.com/wp-content/uploads/2017/10/growlers.jpg" alt="" className="gearSection" width="500px" height="300px"></img>
            </div>
        </div>
        </section>
    </body>
    )   
}

export default Home;

