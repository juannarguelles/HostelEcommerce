import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }
  }));

const Spinner = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress color="inherit" size="26px" />
        </div>
    )
}

export default Spinner
