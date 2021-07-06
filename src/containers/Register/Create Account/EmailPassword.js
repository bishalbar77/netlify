import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { AuthenticationUser } from "../../../services/login.service";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { EmailValidator } from "../../../Shared/utils/validators";
import { setAuthenticationFlag } from "../../../action/login.action";
import Alert from "@material-ui/lab/Alert";
import { usePasswordValidation } from "../../../hooks/usePasswordValidation";

function EmailPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowPasswordConfirm = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [validation, setValidation] = useState({
    error: { password: false, email: false,confirmPassword:false },
    errorMessage: {},
  });
  const { error, errorMessage } = validation;
  const [pass, setPass] = useState({
    MainPassword: "",
    confirmPassword: "",
  });
  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    specialChar,
  ] = usePasswordValidation({
    firstPassword: pass.MainPassword,
    secondPassword: pass.confirmPassword,
  });
  const setFirst = (event) => {
    setPass({ ...pass, MainPassword: event.target.value });
  };
  const setSecond = (event) => {
    setPass({ ...pass, confirmPassword: event.target.value });
  };
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    EmailValidator(email.target.value, dispatch);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let isErrorPassword;
    let isErrorEmail;
    let isErrorConfirmPassword;
    if (password.length === 0) {
      isErrorPassword = true;
      setValidation((pres) => ({
        ...pres,
        error: {...pres.error,  password: true },
        errorMessage: { ...pres.errorMessage,password: "Please Provide password" },
      }));
    } else {
      isErrorPassword = false;
      setValidation((pres) => ({
        ...pres,
        error: {...pres.error, password: false },
        errorMessage: { ...pres.errorMessage,password: "" },
      }));
    }
    if (confirmPassword.length === 0) {
      isErrorConfirmPassword = true;
      setValidation((pres) => ({
        ...pres,
        error: {...pres.error, confirmPassword: true },
        errorMessage: {  ...pres.errorMessage,confirmPassword: "Please Provide password" },
      }));
    } else {
      isErrorConfirmPassword = false;
      setValidation((pres) => ({
        ...pres,
        error: { ...pres.error,confirmPassword: false },
        errorMessage: { ...pres.errorMessage,confirmPassword: "" },
      }));
    }

    if (email.length === 0) {
      isErrorEmail = true;
      setValidation((pres) => ({
        ...pres,
        error: { ...pres.error, email: true },
        errorMessage: { ...pres.errorMessage, email: "Please Provide Email" },
      }));
    } else {
      isErrorEmail = false;
      setValidation((pres) => ({
        ...pres,
        error: { ...pres.error,email: false },
        errorMessage: { ...pres.errorMessage,email: "" },
      }));
    }
    dispatch(setAuthenticationFlag({ responseCode: "", responseMessage: "" }));
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (isErrorEmail === false && isErrorPassword === false &&isErrorConfirmPassword ===false) {
      state.validation.Emailvalidation
        ? AuthenticationUser(formData, dispatch)
        : console.log("Error Occured");
    }
  }
  console.log(validation)
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />

      <form onSubmit={handleSubmit} noValidate>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Login
          </Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              {state.loginDetails.responseCode === 400 ? (
                <Alert variant="outlined" severity="error" fullWidth>
                  Invalid Credentials
                </Alert>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={
                  state.validation.emailErrorMessage !== ""
                    ? true
                    : state.loginDetails.responseCode === 400
                    ? true
                    : error.email === true
                    ? true
                    : false
                }
                value={email}
                fullWidth
                label="Email"
                type="email"
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
                    : validLength !== null &&
                      hasNumber !== null &&
                      upperCase !== null &&
                      lowerCase !== null &&
                      specialChar !== null &&
                      (!validLength ||
                        !hasNumber ||
                        !upperCase ||
                        !lowerCase ||
                        !specialChar)
                    ? true
                    : false
                }
                value={password}
                id="standard-password-input"
                label="Password"
                type={showPassword ? "text" : "password"}
                onInput={(e) => setPassword(e.target.value)}
                onBlur={(e) => setFirst(e)}
                helperText={
                  state.validation.passwordErrorMessgae !== ""
                    ? state.validation.passwordErrorMessgae
                    : validLength !== null &&
                      hasNumber !== null &&
                      upperCase !== null &&
                      lowerCase !== null &&
                      specialChar !== null &&
                      (!validLength ||
                        !hasNumber ||
                        !upperCase ||
                        !lowerCase ||
                        !specialChar)
                    ? "Password length should be 6 with one special character and capital letter"
                    : errorMessage.password
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                error={
                  error.confirmPassword === true
                    ? true
                    : match !== null && !match
                    ? true
                    : false
                }
                value={confirmPassword}
                id="confirm-password-input"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                onBlur={(e) => setSecond(e)}
                onInput={(e) => setconfirmPassword(e.target.value)}
                helperText={
                  match !== null && !match
                    ? `Password doesn't match`
                    : errorMessage.confirmPassword
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordConfirm}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item style={{ marginTop: 16 }}>
              <Button type="button" variant="contained">
                Reset
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default EmailPassword;
