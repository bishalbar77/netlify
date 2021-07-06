import "./sidebar.css";
import logo from "../../../Shared/img/logo.svg";
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar, logout }) => {
    return (
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt="logo" />
            <h1 className="title_name">{localStorage.getItem('name') ? localStorage.getItem('name') : "N/A"}</h1>
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
  
        <div className="sidebar__menu">
          <Link to="/dashboard">
            <div className="sidebar__link active_menu_link">
              <i className="fa fa-home"></i>
              <a href="#">Dashboard</a>
            </div>
          </Link>
          <Link to="/company/projects">
          <div className="sidebar__link">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <a href="#">Projects</a>
          </div>
          </Link>
          <Link to="/company/connectors">
          <div className="sidebar__link">
            <i className="fa fa-building-o"></i>
            <a href="#">Connectors</a>
          </div>
          </Link>
          <Link to="/company/connections">
          <div className="sidebar__link">
            <i className="fa fa-handshake-o"></i>
            <a href="#">Connections</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="#">Feedback</a>
          </div>
          </Link>
          <div className="sidebar__logout">
            <i 
            onClick={() => logout()} className="fa fa-power-off"></i>
            <a 
            onClick={() => logout()} href="javascript:void(0)">Log out</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  