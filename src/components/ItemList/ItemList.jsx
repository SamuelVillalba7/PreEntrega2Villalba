import Item from "../Item/Item";
import "./ItemList.css"
export default function ItemList ({products}){
    return (
        <div className="ItemList">
            {products.map((item)=>(
                <Item key={item.Id} product={item} />
            ))}
        </div>
    )
}