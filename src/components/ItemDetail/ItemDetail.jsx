import React from 'react'
import { CardMedia, Typography } from "@material-ui/core"
import ItemCount from './ItemCount'
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from '@material-ui/core/CardActions'
import ItemCalendar from './ItemCalendar'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: '20px',
    },
    media: {  
        height: 0,
        paddingTop: '56.25%',
    },
  });

const ItemDetail = ({ id, title, description, photo, price, stock, 
    handleClose, show, onAdd, quantity } ) => {

        const classes = useStyles();

    return (
            <Card className={classes.root}  key={id} id={id}>
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title={title}
                        /> 
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                            <Typography variant="h4">${price}</Typography>
                            <p>Precio por noche</p>
                        </CardContent>
                        <CardActions>
                            <ItemCount stock={stock} initial='1' onAdd={onAdd} />
                        </CardActions>
                        <CardContent>
                            <ItemCalendar/>
                        </CardContent>
            </Card>
        
    )
}

export default ItemDetail