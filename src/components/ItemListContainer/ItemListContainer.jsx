
import {getProducts,getProductsByCategory} from "../../asyncMook"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ItemListContainer (){
    const [products,setProducts]= useState([])
    const {id}= useParams()

    useEffect(()=>{
        const asyncFunction= id ? getProductsByCategory : getProducts
            asyncFunction(id)
            .then(data=>setProducts(data))
    },[id])


    return (
        <div className="container">
            <ItemList products={products}/>
        </div>
    )
}