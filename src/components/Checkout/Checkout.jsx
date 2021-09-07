import React, { useContext, useState } from 'react'
import { ThemeProvider, Button, makeStyles, createMuiTheme, Typography, TextField } from '@material-ui/core'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'
import { CartContext } from '../../context/CartContext'
import useForm from '../../hook/useForm'
import validator from 'validator'

const useStyles = makeStyles(theme => ({
    form: {
        width: '70%',
        margin: '0 auto',
        "& > *": {
          margin: theme.spacing(1),
          maxWidth: "100%"
        }
      },
    button: {
        textAlign: 'center',
    },
  }));
  
const theme = createMuiTheme({
    typography: {
      h5: {
        fontWeight: 700,
        fontStyle: "italic",
        textTransform: "uppercase"
      }
    }
});

const Checkout = () => {
    
    const classes = useStyles()
    
    const db = getFirestore()


    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState('');


    const cartContext = useContext(CartContext)
    const { itemsInCart, setItemsInCart, cartTotal, clear } = cartContext

    const [venta, completoVenta] = useState(false)
    const [idCompra, setIdCompra] = useState('')

    const [formValues, onChange] = useForm({
        name: '',
        lastName: '',
        email: '',
        telephone: '',
    });

    const { name, lastName, email, telephone } = formValues;

    const compra = {
        user: formValues,
        items: itemsInCart,
        total: cartTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {

                db.collection('ventas').add(compra)
                    .then(({ id }) => {
                        completoVenta(true);
                        setIdCompra(id);
                        setItemsInCart([]);
                    })
                    .catch(e => console.log(e));
        }
        clear()

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            setError(true);
            setErrMessage('Es necesario que ingreses tu nombre');
            return false;
        } else if (lastName.trim().length === 0) {
            setError(true);
            setErrMessage('Es necesario que ingreses tu apellido');
            return false;
        } else if (!validator.isEmail(email)) {
            setError(true);
            setErrMessage('Es necesario que ingreses un mail válido');
            return false;
        } else if (!validator.isMobilePhone(telephone)) {
            setError(true);
            setErrMessage('Es necesario que ingreses un teléfono válido');
            return false;
        }
        return true;
    }


    return (
        <React.Fragment>
            {
            !venta ?
            <ThemeProvider theme={theme}>
                <div className="checkout__container">
                    <div className="checkout__form">
                    {
                        error && <div className="box-error">*{errMessage}</div>
                    }
                        <form className={classes.form}>
                            <Typography variant="h5">Completa tu pago</Typography>
                                <TextField
                                    required
                                    fullWidth
                                    label="Nombre"
                                    name="name"
                                    placeholder="Escribe tu nombre"
                                    autoComplete="off"
                                    value={name}
                                    onChange={onChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Apellido"
                                    name="lastName"
                                    placeholder="Escribe tu apellido"
                                    autoComplete="off"
                                    value={lastName}
                                    onChange={onChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    placeholder="Escribe tu Email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={onChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Teléfono"
                                    name="telephone"
                                    placeholder="Escribe tu teléfono"
                                    value={telephone}
                                    onChange={onChange}
                                />
                            
                            <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.button}>
                                Finalizar compra
                            </Button>
                        </form>     
                    </div>
                </div>
        </ThemeProvider>
        :
        <Typography>Reserva realizada correctamente, el número de tú reserva es: <strong>{idCompra}</strong></Typography>
        }   
    </React.Fragment>
    )
}

export default Checkout
