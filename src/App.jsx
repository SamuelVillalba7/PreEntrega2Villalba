
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
