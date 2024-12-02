import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()


export const CartProvider=({children})=>{
    
    const [cart, setCart] = useState([]); // Estado inicial como un array vacío

    const isInCart = (id) => {
        return cart.some((item) => item.Id === id); // Cambiado "Id" por "id" si es el caso
      };


    
    const addItem =(item,cant)=>{
        if(!isInCart(item.Id)){
            const itemCart = {
                Id:item.Id,
                Nombre:item.Nombre,
                Precio:item.Precio,
                Cantidad:cant
        }
            setCart((prev)=>[...prev,itemCart])
        }else{
            setCart((prev) =>
                prev.map((aux) =>
                  aux.Id === item.Id
                    ? { ...aux, Cantidad: aux.Cantidad + cant } // Crear un nuevo objeto con cantidad actualizada
                    : aux // Dejar los demás elementos iguales
                )
              );
        }
    }

    const deleteById=(id)=>{
        setCart((prev)=>
            prev.filter((item)=>{
                if(item.Id!=id){
                    return item
                }
                }        
            )
        )
    }

    
    const obj={
        cart,
        setCart,
        addItem,
        isInCart,
        numero : 1,
        deleteById
      
    }
    return(
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )

}