import React from 'react'
import Item from './Item'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    grid: {
        marginBottom: '10%',
    },
  }));

const Itemlist = ({ items }) => {
    const classes = useStyles();
    return (
            <Grid container spacing={3} className={classes.grid}>
                {items !== undefined && 
                items.map(item => {
                    return <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    />
                })}
            </Grid>
    )
}

export default Itemlist
