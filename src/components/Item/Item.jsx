import {Link} from "react-router-dom"

export default function Item ({product}){
    return (
       
        <div className="card" style={{width: "18rem"}}>
            <img src={product.Imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.Nombre}</h5>
                <p className="card-text">${product.Precio}</p>
                <Link to={`/detail/${product.Id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
         </div>
         
    )
}