import React, { useState, useContext, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Spinner from '../Spinner/Spinner'
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'


const useStyles = makeStyles({
  detail: {
    display: "flex",
    justifyContent: "center",
  },
  
  
});

const ItemDetailContainer = () => {
    const classes = useStyles();

    const [item, setItem] = useState()
    const [show, setShow] = useState(false)
    const [quantity, setQuantity] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    const { addItem } = useContext(CartContext)

    const { id } = useParams()

    const onAdd = (value) => {

        const addItemWorked = addItem(
          {
            id: id,
            title: item.title,
            description: item.description,
            photo: item.image,
            price: item.price,
            stock: item.stock,
          },
          value)
    
        if (addItemWorked) {
          setQuantity(value)
        }
        else {
          setShow(true)
        }
      }

   useEffect(() => {
    setIsLoading(true)
    
    const db = getFirestore()
    const itemCollection = db.collection("items")
    const itemData = itemCollection.doc(id)

    itemData.get().then((doc) => {
      if (!doc.exists) {
        console.log("El item no existe")
        return
      }
      setItem({ id: doc.id, ...doc.data() })
    }).catch((error) => {
      console.log("Error trayendo los resultados", error)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [id])

    return (
        <Container className={classes.detailContainer}>
            <Box className={classes.detail}>
              {isLoading ? <Spinner /> :
                  item ? <ItemDetail
                      id={id}
                      title={item.title}
                      description={item.description}
                      photo={item.image}
                      price={item.price}
                      stock={item.stock}
                      handleClose={() => setShow(false)}
                      show={show}
                      onAdd={onAdd}
                      quantity={quantity}
                      />
                      :
                  <Spinner />
              }
            </Box>
        </Container>
    )
}

export default ItemDetailContainer