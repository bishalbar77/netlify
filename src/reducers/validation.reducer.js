import { SET_EMAIL_VERIFICATION,SET_PASSWORD_VERIFICATION } from "../Shared/constant/actionTypes.constant";
const initialState = {
  Emailvalidation: false,
  emailErrorMessage: "",
  PasswordValidation:false,
  passwordErrorMessgae:"",
};
export const validation = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL_VERIFICATION:
      return {
        ...state,
        emailErrorMessage: action.payload.message,
        Emailvalidation: action.payload.value,
      };
      case SET_PASSWORD_VERIFICATION:
        return{
          passwordErrorMessgae:action.payload.message,
          PasswordValidation:action.payload.value
        }
    default: {
      return state;
    }
  }
};
