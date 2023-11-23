import {  NavLink } from "react-router-dom";
export default function NavBar({onLogout}){


    return(
        <>
            {/* <a href="/home">Home</a> | <a href="/contact">Contact Us</a> */}
            {/* <Link to="/home">Home</Link> | 

            <Link to="/contact">Contact us</Link> */}

            <NavLink to="/">HOME</NavLink>|
            <NavLink to="/shirts">SHIRTS</NavLink> | 
            <NavLink to="/shoes">SHOES</NavLink> |
            <NavLink to="/trousers">TROUSERS</NavLink> |
            <NavLink to="/cart">CART</NavLink>
            <button onClick={onLogout} className='logout-btn'>Log Out</button>

            {/* <Link to="/shirts"><button>Shirts</button></Link>
            <Link to="/shoes"><button>Shoes</button></Link>
            <Link to="/trousers"><button>Trousers</button></Link>
            <Link to="/cart"><button>Cart</button></Link> */}
        </>
    );
}