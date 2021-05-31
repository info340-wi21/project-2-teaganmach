import React from 'react';
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

let styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "fff",
        ['@media (max-width: 780px)']:{
            display: "flex",
            flexDirection: "row"
        }
    },
    logo: {
        width: "15%",
        ['@media (max-width:780px']:{
            display:"none"
        }
    },
    logoMobile:{
        width:"100%",
        display:"none",
        ['@media (max-width:780px)']:{
            display:"inline-block"
        }
    },
    menuItem:{
        cursor: "pointer",
        flexGrow: 1,
        "&:hover":{
            color:"#4f25c8"
        },
        ['@media (max-width:780px)']:{
            paddingBottom: "1rem"
        }
    }
})

function Navbar(){
    let classes = styles();
    return(
    <Toolbar position="sticky" color='rgba(0,0,0,0.87)' className={classes.bar}>
        <img src="" className={classes.logo}/>
        <img src="" clasName={classes.logoMobile}/>
        <Typography variant='h6' className={classes.menuItem}>
            About
        </Typography>
        <Typography variant='h6' className={classes.menuItem}>
            Leaderboard
        </Typography>
        <Typography variant='h6' className={classes.menuItem}>
            Create a schedule
        </Typography>
        <Typography variant='h6' className={classes.menuItem}>
            Contact us
        </Typography>
    </Toolbar>
    );
}

export default Navbar