import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Cuadricula.css"
import Cripto from './Cripto'



function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const API_IMAGES_URL = "https://rest.coinapi.io/v1/assets/icons/32" //import.meta.env.VITE_API_IMAGES_URL
    const headers = {
        'X-CoinAPI-Key': 'B953C808-30BC-4857-A63D-A080DA25396C'
    };
 

  const [criptos, setCriptos] = useState()
  const [img, setImg] = useState([])

  useEffect(
    
    () => {
      axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      } )
      .catch(() => {
        console.error("La peticion fallo!")
        
      })

        axios.get(`${API_IMAGES_URL}`, {headers})
        .then((data) => {
            setImg(data.data)
        } )
        .catch(() => {
            console.error("La peticion fallo!")
          
        })
    }, []
  )



  if(!criptos) return <span>Cargando...</span>
  return (
    <div className='app-container'>
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto key={id}
              id={id} 
              name={name} 
              priceUsd={priceUsd} 
              symbol={symbol} 
              changePercent24Hr={changePercent24Hr}
              url ={img.find(coin => coin.asset_id == symbol)} />
          ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
