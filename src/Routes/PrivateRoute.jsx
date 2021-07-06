import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { CheckIfAuthenticated } from "../services/login.service";

export default function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const loginDetails = useSelector((state) => state.loginDetails);
  const token = localStorage.getItem("auth-token");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (loginDetails && loginDetails.responseCode !== 200) {
      if (token !== null) {
        CheckIfAuthenticated(token, dispatch);
        setIsLoggedIn(true)
      }
    }
    else{
      setIsLoading(false)
    }
    if (!loginDetails && token !== null) {
      CheckIfAuthenticated(token, dispatch);
    }
    else{
      setIsLoading(false)
    }
    if (
      loginDetails &&
      loginDetails.loginToken &&
      loginDetails.responseCode === 200
    ) {
      setIsLoggedIn(true);
      setIsLoading(false);
    }else{
      setIsLoading(false)
    }
  }, []);
  return IsLoading ? (
    <p>Loading...</p>
  ) : (
    <Route
      {...rest}
      render={(props) =>
        IsLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
