import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css'
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const{ cartQuantity } = useContext(CartContext)
return (
    <div>
    <Link to="/cart"><ShoppingCartIcon data-testid="ShoppingCartIcon" className="icon-carrito"/></Link>
{cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div> )}

export default CartWidget