import React from 'react'
import { IconButton, Badge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoomServiceIcon from '@material-ui/icons/RoomService';

const useStyles = makeStyles({
    shoppingCartIcon: {
        color: 'black',
        marginTop: 'auto',
        fontSize: '2.5rem',
    },
  });


const CartWidget = ({qyInCart}) => {
    const classes = useStyles()
    return (
        <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={qyInCart} color="primary">
                <RoomServiceIcon className={classes.shoppingCartIcon}/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget
