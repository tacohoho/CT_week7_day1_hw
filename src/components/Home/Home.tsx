import React from "react";
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import pokemon_background from '../../assets/images/pokemon-background.jpg';
import logo from '../../assets/images/pokemon-logo.png'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${logo})`,
        margin: '0 0 0 0.45rem'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none'
    },
    main:{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${pokemon_background})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '48%',
        color: 'white'
    }

});


export const Home = (props:Props) =>{
    // Creating/ instantiating styles by calling useStyles()
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.logo}>
                        {/* <a href="" className={`${classes.logo_a} ${classes.logo_navigation}`}></a> */}
                        <img src="../../assets/images/pokemon-logo.png" alt="Pokemon Logo"/>
                    </h1>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                </div>
            </main>
        </div>
    )
}
