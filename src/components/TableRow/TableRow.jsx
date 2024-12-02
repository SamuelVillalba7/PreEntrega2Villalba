import { useCart } from "../../hooks/useCart"


export default function TableRow({item}){

    const {deleteById}=useCart()
    const handleDeleteToCart =()=>{
        deleteById(item.Id)
    } 
    return (
        <tr>
            <th>{item.Id}</th>
            <th>{item.Nombre}</th>
            <th>{item.Precio}</th>
            <th>{item.Cantidad}</th>
            <th><button className="" onClick={handleDeleteToCart}>X</button></th>
        </tr>
    )
}