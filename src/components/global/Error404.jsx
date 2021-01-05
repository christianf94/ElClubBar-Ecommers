import "../../styles/Error404.css"

const Error404 = () => {
    return(
        <body className="container">
            <article className="infoDiv-Error">
                <h3 className="errorName pulse">404</h3>
                <p className="error">ERROR</p>
            </article>
            <div className="detailError">
                <p className="detail">Como que has tomado mucha cerveza y te perdiste.</p>
            </div>
        </body>
    )
}

export default Error404;