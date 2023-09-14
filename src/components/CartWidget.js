import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css'
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const{ cartQuantity } = useContext(CartContext)
return (
    <div className="d-flex justify-content-around align-items-center">
<ShoppingCartIcon data-testid="ShoppingCartIcon" className="icon-carrito"/>
{cartQuantity() > 0 && <Badge bg="danger">{cartQuantity}</Badge>}
    </div> )}

export default CartWidget