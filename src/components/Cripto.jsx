
import { Link } from "react-router-dom"
import "./Cripto.css"
import axios from 'axios'
import { useEffect } from "react"

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr,url}) => {
    let src = ""
    if(typeof url === 'undefined') {
    }
    else{ src = url.url}

    return (
        <div className="cripto">
            <div className="cripto-name">
                <img src={src} />
                <Link className="link-detalles" to={`/criptomonedas/${id}`}><h2>{name}</h2></Link>
                <h3>{symbol}</h3>
            </div>
            <div className="info">
                <p><span className="label">Precio: </span>${parseFloat(priceUsd).toFixed(4)}</p>
                <p>
                    <span className="label" >Variacion 24hrs:</span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>{parseFloat(changePercent24Hr).toFixed(3)}%</span>
                </p>   
            </div>
        </div>
    )
}

export default Cripto