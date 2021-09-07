import React from 'react'
import CartItem from './CartItem'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    cart: {
      display: 'flex',
      marginBottom: '10%',
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '20px',
    },
    container: {
        margin: '0 auto',
        width: '70%',
    },
    total: {
        fontSize: '2.2rem',
        marginTop: '10px',
        textAlign: 'end',
    },
    contentButton: {
        display: 'flex',
        justifyContent: 'end',
    },
    finishBuying: {
        backgroundColor: '#58D68D',
    },
  }));


const Cart = ({itemsInCart, cartTotal, removeItem }) => {

    const classes = useStyles()

    const history = useHistory()

    const onCheckout = () => {
        history.push("../Checkout");
    }


    return (
        <div className={classes.cart}>
            <div className={classes.container}>
                <div className={classes.title}>Mi Carrito</div>
                    {itemsInCart.map(e => {
                        return <CartItem
                        key={e.item.id}
                        id={e.item.id}
                        photo={e.item.photo}
                        title={e.item.title}
                        price={e.item.price}
                        quantity={e.qy}
                        removeItem={removeItem}
                        />
                    })}
                    <Typography className={classes.total}>
                        Total: ${cartTotal}.-
                    </Typography>
                    <div className={classes.contentButton}>
                        <Button
                            variant="contained"
                            onClick={onCheckout}
                            className={classes.finishBuying}
                            >
                            Finalizar Compra
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default Cart
