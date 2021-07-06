import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLoginToken,setAuthenticationFlag } from "../action/login.action";
import Api from '../Api';

axios.defaults.withCredentials = true;

async function AuthenticationUser(body,dispatch) {
  // axios.get(`http://dalaldeals.test/sanctum/csrf-cookie`).then( async (response) => {
  //   console.log(response)
  await Api()
    .post(
      `/login`,
      body,
    )
    .then((result) => {
       dispatch(setLoginToken(result.data.token));
       localStorage.setItem("auth-token",result.data.token);
       dispatch(setAuthenticationFlag({responseCode:result.status,responseMessage:result.statusText}))
       return result;
    })
    .catch((error) => {
      dispatch(setAuthenticationFlag({responseCode:error.response.status,responseMessage:'Invalid Credentials'}))
      console.log(error.response);
    });
  // });
}
async function CheckIfAuthenticated(token,dispatch) {
  await Api()
    .get(
      `/profile`,
    )
    .then((result) => {
       dispatch(setLoginToken(token));
       localStorage.setItem("auth-token",token);
       dispatch(setAuthenticationFlag({responseCode:result.status,responseMessage:result.statusText}))
       localStorage.setItem("id", result.data.id);
       localStorage.setItem("name", result.data.name);
       localStorage.setItem("email", result.data.email);
    })
    .catch((error) => {
      dispatch(setAuthenticationFlag({responseCode:error.response.status,responseMessage:'Invalid Credentials'}))
      console.log(error.response);
    });
  // });
}

export { AuthenticationUser, CheckIfAuthenticated };
