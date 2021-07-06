import {
  SET_LOGIN_TOKEN,
  SET_IS_AUTHENCTICATION_SUCESSFUL
} from '../Shared/constant/actionTypes.constant';
const initialState ={
  loginToken:{},
  responseCode:'',
  responseMessage:''
  
  
}
export const loginDetails = ( state = initialState, action)=>{
  console.log(action)
  switch(action.type){
    case SET_LOGIN_TOKEN:
      let token = localStorage.getItem("auth-token");
      if (token === null) {
          localStorage.setItem("auth-token", "");
          token = "";
      }

      return{
        ...state,
        loginToken:action.payload
    }
    case SET_IS_AUTHENCTICATION_SUCESSFUL:
      return{
        ...state,
        responseCode:action.payload.responseCode,
        responseMessage:action.payload.responseMessage
      }

    default:{
      return state
    }
  }

}