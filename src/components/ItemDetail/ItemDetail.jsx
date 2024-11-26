import { useState } from "react"
import "./ItemDetail.css"
export default function ItemDetail ({product}){

    const[cantidad,setCantidad]= useState(1)
    
    const incrementar=()=>{
        if(product.Stock>cantidad){
            setCantidad(cantidad+1)
        }    
    }

    const decrementar=()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)
        }
    }
    
    
    
    return (
        <div className="card" style={{width: "20rem"}}>
            <img src={product.Imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.Nombre}</h5>
                <p className="card-text">${product.Precio}</p>
                <p className="card-text">disponible: {product.Stock}</p>
                <hr/>
                <h5>cantidad: {cantidad}</h5>
                <div className="botonera">
                    <button onClick={decrementar} className="btn btn-secondary">-</button>
                    <button className="btn btn-primary">agregar carrito</button>
                    <button onClick={incrementar} className="btn btn-secondary">+</button>
                </div>
            </div>
         </div>
        
    )
}