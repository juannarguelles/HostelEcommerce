import React, { useContext }  from 'react'
import { AppBar, Toolbar, FormControl, InputLabel, Select, MenuItem, makeStyles} from '@material-ui/core'
import logo from '../../images/LOGO-PNG.png'
import CartWidget  from './CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px',
  },
  appBar: {
    backgroundColor: '#edbcb2', 
  },
  toolbar: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  formControl: {
    margin: 'auto',
    minWidth: 120,
  },
}));



const NavBar = ({ categories }) => {
  const classes = useStyles()
  const { qyInCart } = useContext(CartContext);

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
          <Toolbar className={classes.toolbar}> 
              <div>  
              <Link className={classes.logo} to="/">
                <img src={logo} alt="" height="75px" />
              </Link>
              </div>
              <div>  
              <FormControl className={classes.formControl}>
                <InputLabel >Categorias</InputLabel>
                  <Select value=''>
                    {categories && categories.length > 0 &&
                      categories.map((category) => {
                        return <MenuItem 
                          key={category.key}
                          component={Link}
                          to={`/category/${category.key}`}>{category.name}</MenuItem>
                      })
                    }
                  </Select>
              </FormControl>
              
              <Link as={Link} to={`/cart`}>
                <CartWidget qyInCart={qyInCart}/>
              </Link>
              </div> 
          
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
