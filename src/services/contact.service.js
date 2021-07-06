import axios from "axios";
import { ApiUrl } from "../Shared/constant/codeConstant";
import Api from '../Api';
import Swal from 'sweetalert2';

axios.defaults.withCredentials = true;

async function storeContactQueries(body) {
 
    await axios
      .post(
        `${ApiUrl}/storeContactQueries`,
        body,
      )
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for getting in touch!',
          icon: 'success',
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonText: 'Ok',
          cancelButtonColor: '#28a745',
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Something went wrong!',
          text: error.response.data.message,
          icon: 'error',
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonText: 'Ok',
          cancelButtonColor: '#d33',
        })
        console.log(error.response.data.message);
      });
  }
  
export { storeContactQueries };