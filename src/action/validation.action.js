import {
  SET_EMAIL_VERIFICATION,
  SET_PASSWORD_VERIFICATION
} from '../Shared/constant/actionTypes.constant';


export const setEmailError = (payload)=>{
  return{
    type:SET_EMAIL_VERIFICATION,
    payload:payload
  }
}
 export const setPasswordValidation =(payload)=>{
   return{
     type:SET_PASSWORD_VERIFICATION,
     payload:payload
   }
 }
