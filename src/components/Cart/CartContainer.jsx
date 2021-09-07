import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from './Cart'


const CartContainer = () => {

    const { itemsInCart, cartTotal, removeItem } = useContext(CartContext)
    
    return (
        <React.Fragment>
            {<Cart 
                itemsInCart={itemsInCart}
                cartTotal={cartTotal}
                removeItem={removeItem}
            />}
        </React.Fragment>
    )
}

export default CartContainer