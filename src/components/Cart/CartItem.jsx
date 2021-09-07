import React from 'react'
import { Card, Button, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  cover: {
    width: '300px',
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: '20px',
    paddingTop: '10px',
  },
  removeItem:{
    color:'red',
    justifyContent: 'left',
  },
});


const CartItem = ({ id, photo, title, price, quantity, removeItem }) => {

  const classes = useStyles();

    return (
      <Card className={classes.root}>
        <img
            className={classes.cover}
            src={photo}
            alt={title}
          />
        <div className={classes.content}>
          <Typography component="h5" variant="h5">
                  {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                Cantidad de Noches: {quantity}
          </Typography>
          <Typography>
           Subtotal: ${price * quantity}
          </Typography>
          <Button className={classes.removeItem}>
             Quitar
            <DeleteIcon onClick={() => removeItem(id)} />
          </Button>
        </div>
    </Card>
    )
}

export default CartItem
