import React, { useEffect, useState } from 'react';
import Product from './Product-tour.svg';
import './Home.scss';
import { company, connector } from './data';
import {
  Button,
  ButtonBase,
  createMuiTheme,
  Grid,
  Paper,
  Typography,
  ThemeProvider,
  Hidden,
} from '@material-ui/core';
import { CheckCircleOutlined } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Shared/utils/animation';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Quicksand', 'Segoe UI', 'Roboto'].join(','),
    fontWeight: [300, 400, 500, 600, 700].join(','),
    h4: {
      fontWeight: 600,
    },
  },
});

const Home = () => {
  const [connectors, setConnector] = useState(connector);
  const [companies, setCompanies] = useState(company);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        className='root homepage'
        exit='exit'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
      >
        <Paper className='paper'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6} container>
              <Grid item xs display='flex' alignItems='center'>
                <Typography gutterBottom variant='h4' className='headings'>
                  Connecting
                </Typography>
                <Typography gutterBottom variant='h4' className='headings'>
                  Connector/Company
                </Typography>
                <Typography className='paragraph' variant='body1' gutterBottom>
                  Do you have connections in the industry that can be leveraged
                  to earn money? Do you have products and services that are
                  awaiting clients? If, yes join and explore the power of
                  connections.
                </Typography>
                <Grid item xs>
                  <Button
                    variant='contained'
                    color='secondary'
                    className='buttons'
                    href='/company/register'
                  >
                    I'm a Company
                  </Button>
                  <Button
                    variant='contained'
                    color='secondary'
                    className='buttons'
                    href='/connector/register'
                  >
                    I'm a Connector
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button variant='contained' color='secondary' href='/join-us'>
                    Sign up and connect with us
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Hidden xsDown>
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                container
                justify='center'
                alignItems='center'
              >
                <ButtonBase className='image'>
                  <img className='img' alt='Product' src={Product} />
                </ButtonBase>
              </Grid>
            </Hidden>
          </Grid>
        </Paper>

        {/*CONNECTOR*/}
        <Paper className='paper connector-container'>
          <Typography variant='h4' className='headings'>
            How Connectors Works
          </Typography>

          {connectors.map((connector) => (
            <Paper className='inner-paper' variant='outlined'>
              <Grid container spacing={4} justify='center'>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={3}
                  container
                  justify='center'
                  alignItems='center'
                >
                  <ButtonBase className='images'>
                    <img
                      className='img'
                      alt={connector.image}
                      src={connector.image}
                    />
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  container
                  alignItems='center'
                  justify='center'
                >
                  <Grid item xs display='flex' alignItems='center'>
                    <Typography gutterBottom variant='h6'>
                      {connector.title}
                    </Typography>
                    <Typography
                      className='paragraph'
                      variant='body1'
                      gutterBottom
                    >
                      {connector.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid
                    item
                    md={3}
                    container
                    alignItems='center'
                    justify='center'
                  >
                    <ButtonBase>
                      <CheckCircleOutlined className='icons' />
                    </ButtonBase>
                  </Grid>
                </Hidden>
              </Grid>
            </Paper>
          ))}
        </Paper>

        {/*COMPANY*/}
        <Paper className='paper company-container'>
          <Typography variant='h4' className='headings'>
            How Company Works
          </Typography>

          {companies.map((company) => (
            <Paper className='inner-paper' variant='outlined'>
              <Grid container spacing={4}>
                <Hidden smDown>
                  <Grid
                    item
                    md={3}
                    container
                    alignItems='center'
                    justify='center'
                  >
                    <ButtonBase>
                      <CheckCircleOutlined className='icons' />
                    </ButtonBase>
                  </Grid>
                </Hidden>
                <Hidden smUp mdDown>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={3}
                    container
                    justify='center'
                    alignItems='center'
                  >
                    <ButtonBase className='images'>
                      <img
                        className='img'
                        alt={company.image}
                        src={company.image}
                      />
                    </ButtonBase>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} md={6} container alignItems='center'>
                  <Grid
                    item
                    xs
                    display='flex'
                    alignItems='center'
                    justify='center'
                  >
                    <Typography gutterBottom variant='h6'>
                      {company.title}
                    </Typography>
                    <Typography
                      className='paragraph'
                      variant='body1'
                      gutterBottom
                    >
                      {company.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    md={3}
                    container
                    justify='center'
                    alignItems='center'
                  >
                    <ButtonBase className='images'>
                      <img
                        className='img'
                        alt={company.image}
                        src={company.image}
                      />
                    </ButtonBase>
                  </Grid>
                </Hidden>
              </Grid>
            </Paper>
          ))}
        </Paper>
      </motion.div>
    </ThemeProvider>
  );
};

export default Home;
