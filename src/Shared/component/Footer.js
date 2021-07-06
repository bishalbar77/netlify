import React from "react";
import {
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { HeaderData } from "../constant/codeConstant";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Container from '@material-ui/core/Container';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TelegramIcon from "@material-ui/icons/Telegram";

export default function Footer() {
  const footerButton = () => {
    return HeaderData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label === "T&C" ? "Terms & Condition" : label}
        </Button>
      );
    });
  };
  if (window.location.pathname === '/dashboard' || window.location.pathname === '/company/connections' || window.location.pathname === '/company/projects' || window.location.pathname === '/company/connectors') return null;
  return (
    <div className="Footer">
     
        <div className='Footer_CompanyName'>INCONNECTORS</div>
        <div>{footerButton()}</div>
        <div>
          <Divider className="Footer_Divider" />
        </div>
        <div className="Footer_Icon">
          <div className="Footer_Icon_Style">
            <a href="#">
              <FacebookIcon />
            </a>
          </div>
          <div className="Footer_Icon_Style">
            <a href="#">
              <TwitterIcon />
            </a>
          </div>
          <div className="Footer_Icon_Style">
          <a href="#">
            <InstagramIcon />{" "}
            </a>
          </div>
          <div className="Footer_Icon_Style">
          <a href="#">
            <MailOutlineIcon />{" "}
            </a>
          </div>
          <div className="Footer_Icon_Style">
          <a href="#">
            <TelegramIcon />
            </a>
          </div>
        </div>
        <div className="Footer_Copyright">© INCONNECTORS 2021</div>
      
    </div>
  );
}
