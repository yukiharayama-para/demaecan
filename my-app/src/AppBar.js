import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './demaecan_logo.png';



  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    logoWrapper: {
      flexGrow: 1,
    },
    logo: {
      width: 30,
      height: "auto",
    },
    register:{
      marginRight: theme.spacing(1),
      color:"default",
    },
    login: {
      backgroundColor:"#e83434",
      color:"white",
      variant:"contained",
      fontWeight:"bold",
      '&:hover': {
        backgroundColor:"#BA2828",
      },
    }
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="fixed" color="default">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <div className={classes.logoWrapper}>
                <img src={logo} alt="Logo" className={classes.logo} />
              </div>
              <Button className={classes.register}>新規登録</Button>
              <Button className={classes.login}>ログイン</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }

