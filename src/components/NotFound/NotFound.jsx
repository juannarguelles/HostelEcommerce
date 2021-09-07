import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginBottom: '10px',
      justify: 'center',
      textAlign: 'center',
    },
    title:{
        paddingTop: '170px',
        fontSize: '25px',
    },
    backhome:{
        marginTop: '50px',
    },
    button:{
        backgroundColor: '#edbcb2',
        "&:hover": {
            boxShadow: '10px 10px 0px #CD5C5C',
        },
        "&:active": {
            backgroundColor: "#EC5637",
        },
    },
    link:{
        textDecoration: 'none',
        fontWeight: 'bolder',
        color: '#2C3E50',
        "&:hover": {
            color: '#2C3E50',
          },
    },
});
  

const NotFound = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>No pudimos encontrar la página que buscaba.</Typography>
            <Grid container justify="center" alignItems="center">
                <div className={classes.backhome} >
                    Regresar a la 
                    <Typography
                    springConfig={{ stiffness: 100, damping: 12 }}
                    interval={1000}>
                        <Button className={classes.button} >
                            <Link className={classes.link} to="/">Home</Link>
                        </Button>
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}

export default NotFound
