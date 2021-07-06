import {combineReducers} from "redux";
import {loginDetails} from './login.reducer';
import {validation} from './validation.reducer'

const rootReducer = combineReducers({
  loginDetails,
  validation,
})

export default rootReducer