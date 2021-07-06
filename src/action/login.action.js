import {
   SET_LOGIN_TOKEN,
   SET_IS_AUTHENCTICATION_SUCESSFUL
} from '../Shared/constant/actionTypes.constant';

export const setLoginToken =(payload)=>{
  return{
    type:SET_LOGIN_TOKEN,
    payload:payload
  }
}

export const setAuthenticationFlag =(payload)=>{
  return{
    type:SET_IS_AUTHENCTICATION_SUCESSFUL,
    payload:payload
  }
}