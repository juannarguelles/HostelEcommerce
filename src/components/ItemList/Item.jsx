import React from 'react'
import {  Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 280,
      margin: '0 auto',
      width: '70%',
      justifyContent: 'space-between',
      marginTop: '50px',
    },
    media: {
      height: 200,
    },
    title: {
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        textAlign:'left',
    },
    button: {
        backgroundColor: '#edbcb2',
        color: 'black',
    },
    price: {
        fontSize: '23px',
        color: 'black',
        marginRight: '15px',
        textAlign: 'end',
    },
    cardActions: {
        justifyContent: 'end',
    },
  }));


const Item = ({id, title, price, image }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Link to={`/item/${id}`} className={classes.link}>
                <CardMedia className={classes.media} image={image} />
                    <CardContent className="content">
                        <Typography
                        className={classes.title}
                        variant={"h6"}
                        gutterBottom
                        >
                        {title}
                        </Typography>
                    </CardContent>
            </Link>
            <Typography className={classes.price}>
                 ${price}
            </Typography>
            <CardActions className={classes.cardActions}>
                <Link to={`/item/${id}`} className={classes.link}>
                    <Button size="small" className={classes.button}>
                        Reserva ahora
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Item
