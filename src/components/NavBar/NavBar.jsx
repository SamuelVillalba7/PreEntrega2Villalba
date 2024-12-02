import {Link} from "react-router-dom"
import { useCart } from "../../hooks/useCart"

export default function NavBar (){
    
    const {numero}= useCart()
    
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/category/monitor">monitor</Link>
                    <Link className="nav-link" to="/category/mouse">mouse</Link>
                    <Link className="nav-link" to="/category/teclado">teclado</Link>
                    <Link className="nav-link" to="/category/parlante">parlante</Link>
                    <Link className="nav-link" to="/category/laptop">laptop</Link>
                    <Link className="nav-link" to="/cart">carrito</Link>
                    <p>{numero}</p>
                </div>
                </div>
            </div>
            </nav>


        </>
    )
}