import React, { useState, useEffect } from 'react';

import {
  Button,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuItem,
  Link,
  Divider,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/logo.svg';
import { HeaderData } from '../constant/codeConstant';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import './component.scss';
export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;
  const loginDetails = useSelector((state) => state.loginDetails);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className='Header_Content'>
        <div className='Header_Name'>{logoHeader}</div>
        <div className='Header_Button'>{headerButton()}</div>
      </Toolbar>
    );
  };
  const logoHeader = (
    <Typography align='left'>
      <NavLink to='/' className='Header_Icon'>
        {<img src={logo} alt='' className='Header_Image' />}InConnectors
      </NavLink>
    </Typography>
  );
  const headerButton = () => {
    return HeaderData.map(({ label, href, authed }) => {
      let isLoggedIn = loginDetails.responseCode === 200;
      if (isLoggedIn) {
        return authed ? (
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              component: RouterLink,
            }}
          >
            {label}
          </Button>
        ) : (
          <></>
        );
      } else {
        return (
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              component: RouterLink,
            }}
          >
            {label}
          </Button>
        );
      }
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar className='Header_MobileView'>
        <div>{logoHeader}</div>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          className='Drawer'
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div
            className='DrawerIcon'
            // onClick={() => {
            //   setState((prevState) => ({ ...prevState, drawerOpen: false }));
            // }}
          >
            <CancelPresentationIcon
              onClick={() => {
                setState((prevState) => ({ ...prevState, drawerOpen: false }));
              }}
            />
          </div>
          <Divider class='drawerDivider' />
          <div className='DrawerContainer'>{getDrawerChoices()}</div>
          <Divider class='drawerDivider' />
        </Drawer>
      </Toolbar>
    );
  };
  const getDrawerChoices = () => {
    return HeaderData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            key: label,
          }}
          onClick={() => {
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
          }}
          className='DrawerLinks'
        >
          <MenuItem className='DrawerLinkItems'>{label}</MenuItem>
        </Link>
      );
    });
  };

  return (
    <>
      {(window.location.pathname === '/dashboard' || window.location.pathname === '/company/connections' || window.location.pathname === '/company/projects' || window.location.pathname === '/company/connectors') ? (
        ""
      ) : (
        <div className='Header'>
          <div> {mobileView ? displayMobile() : displayDesktop()}</div>
        </div>
      )}
    </>
  );
}
