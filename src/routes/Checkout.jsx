import { WriteBatch } from "firebase/firestore";
import React, { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { CLEAR_CART} = useContext()

    const createOrder = async ({ name, phone, email}) => {
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart
        }
        const batch: WriteBatch(db)
    }
    return (
        <div>
        <h1> Se está procesando su compra</h1>
        <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}
export default Checkout