import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  more: {
    backgroundColor: '#2ECC71',
  },
  less: {
    backgroundColor: '#EC7063',
  },
  addToCart: {
    backgroundColor: '#609beb',
    marginTop: '10px',
  },
});


const ItemCount = ({ stock, initial, onAdd }) => {

  const classes = useStyles();
  
  const [count, setCount] = useState(Number(initial));

  const disableButton = (id) => {
    let element = document.getElementById(id)
    element.classList.add("disabled")
  }

  const enableButton = (id) => {
    let element = document.getElementById(id)
    element.classList.remove("disabled")
  }

  useEffect(() => {
    count <= 1 ?
      disableButton('reduceBtn')
      : enableButton('reduceBtn')

    count >= Number(stock) ?
      disableButton('addBtn')
      : enableButton('addBtn')
  },
    [count, stock]) 


    useEffect(() => {
      Number(stock) === 0 && disableButton('onAdd')
    })

    const addCount = () => {
      count < Number(stock) && setCount(count + 1)
    }

    const reduceCount = () => {
      count > 1 && setCount(count - 1)
    }
  
    const addToCart = () => {
      count >= 1 && count <= Number(stock) && onAdd(count)
    }

    return (
      <div style={{ margin: "5px" }}>
      <div>
        <h3>Noches: {count}</h3>
      </div>
      <div>
        <Button
          id='addBtn'
          variant="contained"
          onClick={addCount}
          className={classes.more}
        >
          {" "}
          +{" "}
        </Button>
        <Button
          id='reduceBtn'
          variant="contained"
          onClick={reduceCount}
          className={classes.less}
        >
          {" "}
          -{" "}
        </Button>
        <Button
          id='onAdd'
          variant="outlined"
          color="default"
          onClick={addToCart}
          className={classes.addToCart}
        >
          {" "}
          Agregar al carrito{" "}
        </Button>
      </div>
    </div>
  );
}

export default ItemCount
