import Axios from "axios";
import { ApiUrl } from "../Shared/constant/codeConstant";

Axios.defaults.withCredentials = true;
  let BaseApi = Axios.create({
      baseURL: `${ApiUrl}`,
    });

  let Api = function () {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      if (token) {
        BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    return BaseApi;
  };
export default Api;
