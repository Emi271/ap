import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db } from '../services/firebase'

const Checkout = () => {
    const[user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, total, clear} = useContext(CartContext)

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.email) {
        alert('Debes completar los campos')
        } else {
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })
            
        }
    }
  return (
    <div>
        {orderId !== '' ?
    <div>
        <h2>Felicitaciones!! Tu orden fue generada con éxito!</h2>
        <h5>Su id de registro es: {orderId}</h5>
    </div> 
    :   <div>
    <h2>Termina tu compra</h2>
        <h5>Por favor rellene con sus datos</h5>
        <form onSubmit={finalizarCompra}>
            <div className='mb-3'>
                <label className='form-label'>Nombre completo</label>
                <input onChange={datosComprador} className='form-control' type='text' placeholder='Nombre y Apellido' name='name' required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Número de teléfono</label>
                <input onChange={datosComprador} className='form-control' type='number' placeholder='+642922777777' name='phone' required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input onChange={datosComprador} className='form-control' type='email' placeholder='lily@lala.com' name='mail'required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Repita su email</label>
                <input onChange={((e) => setValidateEmail(e.target.value))} className='form-control' type='email' placeholder='lily@lala.com' name='mail'/>
            </div>
            <button className='btn btn-dark' disabled={validateEmail !== user.mail} type='submit'>Generar orden</button>
        </form>
</div> } 
</div>
  )}
export default Checkout