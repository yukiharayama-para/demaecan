import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Grid} from "@material-ui/core";
import restaurant from "./genre/restaurant.png";
import sushi from "./genre/sushi.png";
import chinese from "./genre/chinies.png";
import ramen from "./genre/ramen.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 40,
    },
    container: {
        backgroundColor: '#F7F7F7',
        height: '15vh' ,
        textAlign:"center",
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        display:"flex",
    },
    genre: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: (0 , theme.spacing(1)),
    },
}));



export default function Genre() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        ジャンルからお店を探す
                    </Typography>
                </div>
                <Grid container className={classes.container} >
                    <Avatar alt="restaurant" src={restaurant} className={classes.genre} />
                    <Avatar alt="sushi" src={sushi} className={classes.genre} />
                    <Avatar alt="chinese" src={chinese} className={classes.genre} />
                    <Avatar alt="ramen" src={ramen} className={classes.genre} />
                </Grid>
            </Container>
        </React.Fragment>
    );
}
