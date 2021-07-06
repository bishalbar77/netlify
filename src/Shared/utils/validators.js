import { setEmailError } from "../../action/validation.action";
import { EmailError } from "../../Shared/constant/codeConstant";
export const EmailValidator = (email, dispatch) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    dispatch(setEmailError({ message: "", value: re.test(email) }));
  } else {
    dispatch(
      setEmailError({
        message: EmailError,
        value: re.test(email),
      })
    );
  }
};
