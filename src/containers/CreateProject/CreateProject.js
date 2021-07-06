import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
  Grid,
  Button,
  TextareaAutosize,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
// STYLE
import './create_project.scss';

const CreateProject = () => {
  const [value, setValue] = useState('product');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ProductValues = [
    {
      key: 1,
      label: 'Product Name',
    },
    {
      key: 2,
      label: 'Product Price',
    },
    {
      key: 3,
      label: 'Maximum Quality required',
    },
    {
      key: 4,
      label: 'Minimum Quality required',
    },
    {
      key: 5,
      label: 'Unit you want (eg. kg/g/l/kl)',
    },
  ];

  const serviceValues = [
    { key: 1, label: 'Service Name' },
    { key: 2, label: 'Service Detail' },
    { key: 3, label: 'Service Price' },
  ];

  //   BUTTON_ONCLICK
  const handleProductAdd = (e) => {
    console.log(e);
  };

  const handleServiceAdd = (e) => {
    console.log(e);
  };

  return (
    <div className='companyCreateProject'>
      <Container maxWidth='md'>
        <Paper className='createProjectPaper' elevation={3} square>
          <TabContext value={value}>
            <TabList
              variant='fullWidth'
              value={value}
              indicatorColor='primary'
              textColor='primary'
              onChange={handleChange}
              className='createProjectTabs'
            >
              <Tab
                label='Product'
                className='createProjectSingleTab'
                value='product'
              />
              <Tab label='Service' value='service' />
            </TabList>
            {/* PRODUCT */}
            <TabPanel value='product' className='product'>
              <Grid
                container
                spacing={3}
                justify='center'
                className='productHeadingContainer'
              >
                <Grid item xs={12}>
                  <Typography
                    variant='h5'
                    gutterBottom
                    className='productHeading'
                  >
                    Create a Product
                  </Typography>
                </Grid>
              </Grid>
              <form autoComplete='Off' noValidate>
                <Grid container spacing={3}>
                  {ProductValues.map((formValue) => (
                    <Grid item xs={6} key={formValue.key}>
                      <TextField
                        className='inputField'
                        id='outlined-full-width'
                        variant='outlined'
                        label={formValue.label}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={6}>
                    <input
                      accept='image/*'
                      hidden
                      id='contained-button-file'
                      multiple
                      type='file'
                    />
                    <label htmlFor='contained-button-file'>
                      <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        component='span'
                        disableElevation
                        className='fileUploadButton'
                      >
                        Product Image
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <TextareaAutosize
                      className='inputField'
                      id='filled-full-width'
                      minrowsMin={3}
                      label='About the Product'
                    ></TextareaAutosize> */}
                    <TextField
                      id='outlined-full-width'
                      label='About the Product'
                      fullWidth
                      variant='outlined'
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} className='productButton'>
                    <Button
                      variant='contained'
                      color='primary'
                      className='submitButton'
                      onClick={handleProductAdd}
                    >
                      Create Product
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>

            {/* SERVICE */}
            <TabPanel value='service' className='service'>
              <Grid
                container
                spacing={3}
                justify='center'
                className='serviceHeadingContainer'
              >
                <Grid item xs={12}>
                  <Typography
                    variant='h5'
                    gutterBottom
                    className='serviceHeading'
                  >
                    Create a Service
                  </Typography>
                </Grid>
              </Grid>
              <form autoComplete='Off' noValidate>
                <Grid container spacing={3} justify='center'>
                  {serviceValues.map((formValue) => (
                    <Grid item xs={8} key={formValue.key}>
                      <TextField
                        variant='outlined'
                        className='inputField'
                        id='outlined-full-width'
                        label={formValue.label}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} className='serviceButton'>
                    <Button
                      variant='contained'
                      color='primary'
                      className='submitButton'
                      onClick={handleServiceAdd}
                    >
                      Create Service
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateProject;
