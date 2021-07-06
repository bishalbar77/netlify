import {React, useState}  from "react";
import Sidebar from '../Dashboard/sidebar/sidebar';
import Navbar from '../Dashboard/navbar/navbar';
import Main from '../Dashboard/main/main';
import API from '../../Api/API';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

const Dashboard = () => {
  const history = useHistory();
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setTimeout(function(){ setsidebarOpen(true); }, 200);
  };
  const closeSidebar = () => {
    setTimeout(function(){ setsidebarOpen(false); }, 200);
  };
  const logoutCallback = async () => {
    const response = await API.post("/logout");
    return response.data;
  }

  const logout = () => {
    Swal.fire({
      title: 'Logout!',
      text: 'Are you sure to end the current session?',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'OK',
      cancelButtonColor: '#6c6868',
      confirmButtonColor: '#df4740',
      closeOnConfirm: false,
      closeOnCancel: false
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location = "/";
      }
    });
  };
  
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} logout={logout}/>
    </div>
  );
};
export default Dashboard;

