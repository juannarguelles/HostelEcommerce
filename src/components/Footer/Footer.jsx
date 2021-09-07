import React from 'react'
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../images/LOGO-PNG.png'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: "20px",
        backgroundColor: '#edbcb2',
        position: 'relative',
        bottom: '0',
        width: '100%',
    },
    socialMedia:{
        textDecoration: 'none',
        color: 'black',
        fontSize: '2rem',
    },
    logoContainer: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    socialContainer:{
        marginTop: '25px',
    },
}))

const Footer = () => {
    const classes = useStyles();
    return (
            <div className={classes.footer}>
                <div className={classes.logoContainer}>
                    <Link className={classes.logo} to="/">
                        <img src={logo} alt="" height="55px" />
                    </Link>
                    <Typography variant="subtitle1">
                        Dirección: 8358 Aimé Painé
                    </Typography>
                </div>
                <div className={classes.socialContainer}>
                    <Typography variant="subtitle2">Seguinos:</Typography>
                        <a href="https://facebook.com">
                        <FacebookIcon className={classes.socialMedia}/>
                        </a>
                        <a href="https://instagram.com">
                        <InstagramIcon className={classes.socialMedia}/>
                        </a>
                </div>
            </div>
            
    )
}

export default Footer
