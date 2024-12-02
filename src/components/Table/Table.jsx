
import { useCart } from "../../hooks/useCart"
import TableRow from "../TableRow/TableRow"

export default function Table(){

    const{cart}=useCart()

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>

            <tbody>
                {cart.map((item)=>(
                <TableRow key={item.Id} item={item}/>
                ))}
            </tbody>
        </table>
        

    )

}