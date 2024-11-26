export default function ItemDetail ({product}){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={product.Imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.Nombre}</h5>
                <p className="card-text">${product.Precio}</p>
            </div>
         </div>
        
    )
}