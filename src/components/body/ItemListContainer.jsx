import React from 'react'
import {useState , useEffect} from "react"  
import "../../styles/ItemListContainer.css"
import ItemCard from "../global/ItemCard"

function Body() {

    const [items, setItems] = useState ([])

    const products =[
        {
            id: 1,
            item: "ANDES NEGRA PACK X6" ,
            price: "$740",
            src:"https://d26lpennugtm8s.cloudfront.net/stores/871/106/products/andes-negra1-f2d35f98fb08e276e115603449276102-480-0.png",
            alt:"Cerveza Andes Negra Pack latas x6",
            stocks:20,
        },

        {
            id: 2,
            item: "TEMPLE IPA PACK X6" ,
            price: "$810",
            src:"https://d26lpennugtm8s.cloudfront.net/stores/001/135/244/products/12-pack-ipa1-f4ef8503ec8cbd866215888772729548-1024-10241-af3b04ce756d05e2f315906068427182-1024-1024.jpg",
            alt:"Cerveza Temple IPA x6",
            stocks:10,
        },
    
        {
            id: 3,
            item: "TEMPLE MIX PACK X6" ,
            price: "$830",
            src:"https://masdemucho.com.ar/wp-content/uploads/2020/05/f689c1bf-d003-48ac-b86f-412b189aac61.jpg",
            alt:"Mix Cervezas Temple x6",
            stocks:10,
        },
    
        {
            id: 4,
            item: "DARWIN BALKAN WEIZEN X6" ,
            src:"https://cdn.shopify.com/s/files/1/0287/0322/7979/products/DarwinWeizen-6_900x.jpg?v=1594735755",
            alt:"Cerveza Darwin Weizen x6",
            price: "$850",
            stocks:23,
        },
    
        {
            id: 5,
            item: "BARSTOW HONEY PACK X6" ,
            src:"https://http2.mlstatic.com/pack-x-24-barstow-honey-cerveza-artesanal-lata-473ml-D_NQ_NP_989777-MLA41962435260_052020-F.webp" ,
            alt:"Cerveza Barstow Honey Pack latas x6",
            price: "$710",
            stocks:4,
        },
    
        {
            id: 6,
            item: "BARSTOW MIX ALL STYLES PACK X24" ,
            src:"https://http2.mlstatic.com/pack-x-24-barstow-honey-cerveza-artesanal-lata-473ml-D_NQ_NP_858834-MLA41962156951_052020-F.webp",
            alt:"Cerveza Barstow Mix x24",
            price: "$4210",
            stocks:10,
        },
    
        {
            id: 7,
            item: "PAMPA MIX 3 STYLES PACK X6" ,
            src:"https://http2.mlstatic.com/D_NQ_NP_745296-MLA43061864203_082020-O.jpg",
            alt:"Pampa Mix 3 Styles x6",
            price: "$1000",
            stocks:14,
        },
    
        {
            id: 8,
            item: "ANDES PACK ROJA X6" ,
            src:"https://d26lpennugtm8s.cloudfront.net/stores/871/106/products/andes-roja-pack11-ad5c9e7458f3b57cbb15603448579585-1024-1024.png",
            alt:"Cerveza Andes Roja Pack latas x6",
            price: "$730",
            stocks:0,
        }
    ]

    const getProducts = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    useEffect(()=> {
        getProducts.then(rta => setItems(rta));
    })

    return ( 
        <body className="container">
            <section className="itemContainer">
                {
                    items.length ? 
                    <article className="divItems">
                        {
                            items.map(items => (
                                <ItemCard 
                                    key={items.id}
                                    src={items.src} 
                                    alt={items.alt} 
                                    item={items.item} 
                                    price={items.price} 
                                    stocks={items.stocks}
                                /> ))
                        }
                    </article> :
                    <article className="loadScreen">
                        <div className="pulseDiv">
                            <span class="pulseA"></span>
                            <span class="pulseB"></span>
                            <span class="pulseC"></span>
                        </div>
                        <p> Cargando Productos...</p>
                    </article>
                }
                
            </section>
        </body>
    )
}

export default Body

