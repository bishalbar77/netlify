import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoinImage from '../../Shared/img/JoinImage.svg';
import BusinessIcon from '@material-ui/icons/Business';
import Box from '@material-ui/core/Box';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import './Join.scss';
// ANIMATION
import { pageAnimation } from '../../Shared/utils/animation';
import { motion } from 'framer-motion';

import {
  Button,
  ButtonBase,
  createMuiTheme,
  Grid,
  Paper,
  Typography,
  ThemeProvider,
} from '@material-ui/core';

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
    fontWeight: [300, 400, 500, 600, 700].join(','),
    h4: {
      fontWeight: 600,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  paper: {
    // padding: theme.spacing(2),
    padding: '20px 50px',
    margin: 'auto 4%',
    '@media screen and (max-width: 768px)': {
      padding: '20px 20px',
    },
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
  },
  mainContainerIcon: {
    display: 'flex',
    margin: 'auto',
    color: '#206ba4',
    width: '100%',
    justifyContent: 'center',
    alignItem: 'center',
    textAlign: 'center',
    fontSize: '3rem',
  },
  paragraph: {
    margin: 'auto 10%',
  },
  image: {
    margin: 'auto',
    maxWidth: '400px',
    width: 'auto',
    height: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 2,
  style: {
    borderRadius: 15,
    minWidth: '80%',
    minHeight: '6.5rem',
  },
};

function Join() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        className={classes.root}
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <Paper className={classes.paper}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={6} container>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt='Join us' src={JoinImage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={8} md={6} container>
              <Grid item xs display='flex' alignItems='center'>
                <Typography gutterBottom variant='h4' className='headings'>
                  Join us
                </Typography>
                <Typography variant='body1'>
                  And help businesses grow to greater heights as you grow along
                  with them.
                </Typography>
                <a
                  href='/connector/register'
                  style={{ color: '#000000', textDecoration: 'none' }}
                >
                  <Box
                    borderColor='grey.500'
                    display='flex'
                    justifyContent='center'
                    {...defaultProps}
                  >
                    <Grid item xs={3} className={classes.mainContainer}>
                      <div className='join-us-case-icon'>
                        <BusinessCenterRoundedIcon
                          className={classes.mainContainerIcon}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={9} className={classes.mainContainer}>
                      <Typography variant='body1' fontWeight={800}>
                        <Box fontWeight='fontWeightBold'>I'm a Connector</Box>
                      </Typography>
                      <Typography variant='body1' fontWeight='fontWeightLight'>
                        Leverage your potential to the fullest, use your network
                        to help companies achieve more business and get
                        incentivised in the process.
                      </Typography>
                    </Grid>
                  </Box>
                </a>
                <a
                  href='/company/register'
                  style={{ color: '#000000', textDecoration: 'none' }}
                >
                  <Box
                    borderColor='grey.500'
                    display='flex'
                    justifyContent='center'
                    {...defaultProps}
                  >
                    <Grid item xs={3} className={classes.mainContainer}>
                      <div className='join-us-case-icon'>
                        <BusinessIcon className={classes.mainContainerIcon} />
                      </div>
                    </Grid>
                    <Grid item xs={9} className={classes.mainContainer}>
                      <Typography variant='body1' fontWeight={800}>
                        <Box fontWeight='fontWeightBold'>I'm a Company</Box>
                      </Typography>
                      <Typography variant='body1' fontWeight='fontWeightLight'>
                        Leverage your potential to the fullest, use your network
                        to help companies achieve more business and get
                        incentivised in the process.
                      </Typography>
                    </Grid>
                  </Box>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </ThemeProvider>
  );
}

export default Join;
