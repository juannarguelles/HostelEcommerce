import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBarContainer from './components/NavBar/NavBarContainer'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout'
import NotFound from './components/NotFound/NotFound'
import CartContainer from './components/Cart/CartContainer'
import { CartProvider } from './context/CartContext'


const App = () => {

  return (
    <BrowserRouter>
        <CartProvider>
          <NavBarContainer />
            <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                <Route path='/category/:id'>
                  <Home />
                </Route>
                <Route path='/item/:id'>
                  <ItemDetailContainer />
                </Route>
                <Route path='/cart'>
                  <CartContainer />
                </Route>
                <Route path='/checkout'>
                  <Checkout />  
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
          <Footer />
        </CartProvider>   
    </BrowserRouter>
  )
}

export default App