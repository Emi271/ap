import React, {useState} from "react";
import '../components/style.css'
import { Form } from "react-bootstrap";
import { Input, Label } from "@mui/icons-material";

const CheckoutForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return(
        <div className="container">
            <Form onSubmit={handleConfirm} className="Form">
            <Label className="label"> Nombre</Label>
            <Input className="input" type='text' value={name}
            onChange={({ target })=> setName(target.value)} />
                        <Label className="label"> Teléfono</Label>

            <Input className="input" type='text' value={phone}
            onChange={({ target })=> setName(target.value)} />
                        <Label className="label"> Email</Label>
            <Input className="input" type='text' value={email}
            onChange={({ target })=> setName(target.value)} />
            </Form>
        </div>
    )
}
export default CheckoutForm