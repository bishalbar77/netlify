import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { AuthenticationUser } from '../../services/login.service';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { EmailValidator } from '../../Shared/utils/validators';
import { setAuthenticationFlag } from '../../action/login.action';
import './Login.scss';
import Alert from '@material-ui/lab/Alert';
import { CheckIfAuthenticated } from '../../services/login.service';
import { pageAnimation } from '../../Shared/utils/animation';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    error: { password: false, email: false },
    errorMessage: {},
  });
  const { error, errorMessage } = validation;

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    EmailValidator(email.target.value, dispatch);
  };
  console.log(state);

  function handleSubmit(event) {
    event.preventDefault();
    let isErrorPassword;
    let isErrorEmail;
    if (password.length === 0) {
      isErrorPassword = true;
      setValidation((pres) => ({
        ...pres,
        error: { password: true },
        errorMessage: { password: 'Please Provide password' },
      }));
    } else {
      isErrorPassword = false;
      setValidation((pres) => ({
        ...pres,
        error: { password: false },
        errorMessage: { password: '' },
      }));
    }

    if (email.length === 0) {
      isErrorEmail = true;
      setValidation((pres) => ({
        ...pres,
        error: { ...pres.error, email: true },
        errorMessage: { ...pres.errorMessage, email: 'Please Provide Email' },
      }));
    } else {
      isErrorEmail = false;
      setValidation((pres) => ({
        ...pres,
        error: { email: false },
        errorMessage: { email: '' },
      }));
    }
    dispatch(setAuthenticationFlag({ responseCode: '', responseMessage: '' }));
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    if (isErrorEmail === false && isErrorPassword === false) {
      var token = state.validation.Emailvalidation ? AuthenticationUser(formData, dispatch) : console.log('Error Occured');
      console.log(token);
    }
    if(state.loginDetails.responseCode === 200) {
      history.push('/dashboard');
    }
  }
  
  // const retrieveContacts = async () => {
  //   CheckIfAuthenticated();
  // }

  return (
    <motion.div
      className='Login'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <CssBaseline />

      <form onSubmit={handleSubmit} noValidate>
        <Paper style={{ padding: 16 }}>
          <Typography variant='h4' align='center' component='h1' gutterBottom>
            Login
          </Typography>
          <Grid container alignItems='center' spacing={2}>
            <Grid item xs={12}>
              {state.loginDetails.responseCode === 400 ? (
                <Alert variant='outlined' severity='error' fullWidth>
                  Invalid Credentials
                </Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={
                  state.validation.emailErrorMessage !== ''
                    ? true
                    : state.loginDetails.responseCode === 400
                    ? true
                    : error.email === true
                    ? true
                    : false
                }
                value={email}
                fullWidth
                label='Email'
                type='email'
                onInput={(e) => setEmail(e.target.value)}
                helperText={
                  error.email === true
                    ? errorMessage.email
                    : state.validation.emailErrorMessage
                }
                onBlur={(e) => validateEmail(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                error={
                  state.loginDetails.responseCode === 400
                    ? true
                    : error.password === true
                    ? true
                    : false
                }
                value={password}
                id='standard-password-input'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                onInput={(e) => setPassword(e.target.value)}
                helperText={errorMessage.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item style={{ marginTop: 16 }}>
              <Button type='button' variant='contained'>
                Reset
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </motion.div>
  );
}

export default Login;
