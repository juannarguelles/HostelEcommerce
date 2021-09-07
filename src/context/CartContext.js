import React, { useState } from 'react'
export const CartContext = React.createContext([])


export const CartProvider = ({ children }) => {
  
  const [itemsInCart, setItemsInCart] = useState([])
  
  const [qyInCart, setQyInCart] = useState(0)

  const [cartTotal, setCartTotal] = useState(0)


  const addItem = (item, qy) => {
    const position = isInCart(item.id)
    
    let addItemWorked = true
   
    if (position === -1) {
      itemsInCart.push({ item: item, qy: qy })
      
      setQyInCart(qyInCart + qy)
      setCartTotal(getTotal())
    }
    else {
      const currentQy = itemsInCart[position].qy
      if (currentQy + qy <= item.stock) {
        itemsInCart[position] = { item: item, qy: currentQy + qy }
        
        setQyInCart(qyInCart + qy)
        setCartTotal(getTotal())
      }
      else {
        addItemWorked = false
      }
    }
    return addItemWorked
  }


  const removeItem = (itemId) => {
    const position = isInCart(itemId)

    if (position > -1) {
     
      const qy = itemsInCart[position].qy
      setQyInCart(qyInCart - qy)

      itemsInCart.splice(position, 1);
    }
    setCartTotal(getTotal())
  }

  const clear = () => {
    setItemsInCart([])
    setCartTotal(0)
    setQyInCart(0)
  }

  const isInCart = (itemId) => {
    let i = 0
    const len = itemsInCart.length
    let position = -1
    while (i < len && position === -1) {
      if (itemsInCart[i].item.id === itemId) {
        position = i
      }
      i++
    }
    return position
  }

  const getTotal = () => {
    let total = 0
    const len = itemsInCart.length
    let i = 0

    while (i < len) {
      total += itemsInCart[i].item.price * itemsInCart[i].qy
      i++
    }
    return total
  }

  return (
    <CartContext.Provider
      value={{ itemsInCart, setItemsInCart, addItem, removeItem, clear, isInCart, qyInCart, setQyInCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}