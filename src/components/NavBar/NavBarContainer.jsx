import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { getFirestore } from '../../firebase'

const NavBarContainer = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const categoryCollection = db.collection("categories")

        categoryCollection.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("Sin resultados")
          }
          setCategories(querySnapshot.docs.map(doc => {
            const fullData = { id: doc.id, ...doc.data() }
            return fullData
          }))
        }).catch((error) => {
          console.log("Error trayendo los resultados", error)
        }).finally(() => {
        })
      }, [])
      
    return (<NavBar categories={categories} />)
}

export default NavBarContainer