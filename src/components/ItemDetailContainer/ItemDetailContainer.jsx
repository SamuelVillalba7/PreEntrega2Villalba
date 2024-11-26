import { useParams } from "react-router-dom"
import {getProductById} from "../../asyncMook"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer(){

    const [product,setProduct] = useState({})
    const {id}=useParams()
    useEffect(()=>{
        getProductById(id).then((data)=>{
            setProduct(data)
        })
    })
    
    return(
        <div className="container ItemDetailContainer">
            <ItemDetail product={product}/>
        </div>
    )
}