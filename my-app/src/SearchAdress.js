import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 100,
    },
    container: {
        backgroundColor: '#F7F7F7',
        height: '15vh' ,
        textAlign:"center",
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    btn: {
        margin: (0 , theme.spacing(1)),
        width:"5rem",
        variant:"contained",
        backgroundColor:"#e83434",
        color:"white",
        fontWeight:"bold",
        '&:hover': {
            backgroundColor:"#BA2828",
        },
    },
}));



export default function SimpleContainer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        お届け先からお店を探す
                    </Typography>
                </div>
                <Grid container className={classes.container} >
                    <Button className={classes.btn} disableElevation>郵便番号</Button>
                    <Button className={classes.btn} disableElevation>都道府県</Button>
                    <Button className={classes.btn} disableElevation>マップ</Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
