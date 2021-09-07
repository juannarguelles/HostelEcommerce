import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner'
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '10%',
  },
 
}));


const ItemListContainer = () => {
      const classes = useStyles();

      const [items, setItems] = useState(undefined)
      
      // para mostrar el spinner si esta cargando
      const [isLoading, setIsLoading] = useState(false)

      // Id
      const { id } = useParams()

       // llenado de lista de items "items" al montarse el componente
      useEffect(() => {
      setIsLoading(true)
      // carga de firestore
      const db = getFirestore()
    
      let itemCollection = db.collection("items")
      
      if (id !== undefined) {
        itemCollection = itemCollection.where('category','==',id)
      }
      else {
        // Fijo 10 items como máximo para mostrar
        itemCollection = itemCollection.limit(10)
      }

      itemCollection
        .get()
        .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Sin resultados")
        }
        setItems(querySnapshot.docs.map(doc => {
          const fullData = {id: doc.id, ...doc.data()}
          return fullData}))
        })
        .catch((error) => {
        console.log("Error trayendo los resultados", error)
        })
        .finally(()=> {
        setIsLoading(false)
        })
      }, [id])



    return (
        <Container maxWidth="md" className={classes.container}> 
             {isLoading ? <Spinner /> :
              items && items.length > 0 ? <ItemList items={items} /> :
              <h3 className='mt-5 deliFont'>No se encontraron items para esta categoría</h3>
             } 
        </Container> 
    )
}

export default ItemListContainer