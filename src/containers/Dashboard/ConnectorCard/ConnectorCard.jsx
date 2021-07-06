import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core";
import "./ConnectorCard.css";

const useStyles = makeStyles({
    root: {
      maxWidth: 245,
    },
    media: {
      height: 180,
    },
});
const theme = createMuiTheme({
    typography: {
    fontFamily: [
        'Quicksand',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    fontWeight:[
        300,400,500,600,700
    ].join(','),
    h4:{
        fontWeight:600
    }
    },
});
const ConnectorCard = ({connector}) => {
    const classes = useStyles();
    return (
        <div className="column">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={`https://inconnectors.com/storage/Hunter/${connector.logo}`}
                title={connector.logo}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {connector.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    JVR 0-3 Years
                    Insellers 0-3 Years
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="medium" color="primary" style={{justifyContent: 'center'}}>
                View Profile
                </Button>
            </CardActions>
        </Card>
    </div>
    )
}

export default ConnectorCard;