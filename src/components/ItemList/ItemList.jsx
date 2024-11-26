import Item from "../Item/Item";

export default function ItemList ({products}){
    return (
        <div className="container">
            {products.map((item)=>(
                <Item key={item.Id} product={item} />
            ))}
        </div>
    )
}