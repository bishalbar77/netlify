import React from 'react';
import './App.css';
import Header from '../../Shared/component/header';
import api from '../../Api/contact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  withRouter,
  useLocation,
} from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../../Routes';
import Footer from '../../Shared/component/Footer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/dashboard';
import Contact from '../../Shared/component/contact-us';
import Join from '../Join-us/Join-us';
import AboutUS from '../AboutUs/AboutUs';
import EmailPassword from '../Register/Create Account/EmailPassword';
import FAQ from '../FAQ';
import CreateConnectorProfile from '../Connector/Profile/CreateConnectorProfile';
/*import EditCompanyProfile from "../Company/Edit-Profile/EditProfile"*/
import Chat from '../Chat/Chat/Chat';
import CreateProject from '../CreateProject/CreateProject';
import ErrorPage from '../../Shared/component/errorPage';
import { CheckIfAuthenticated } from '../../services/login.service';
import { useSelector, useDispatch } from 'react-redux';
// ANIMATION
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const history = useHistory();
  /* const dispatch = useDispatch();
  const loginDetails = useSelector((state) => state.loginDetails);
  const token = localStorage.getItem("auth-token");
  if (loginDetails && loginDetails.responseCode !== 200) {
    if (token !== null) {
      CheckIfAuthenticated(token, dispatch);
    }
    else{
      history.push("/login")
    }
  }
  if (!loginDetails && token !== null) {
    CheckIfAuthenticated(token, dispatch);
  }
  else{
    history.push('/login')
  } */

  const addContactHandler = async (contact) => {
    const request = {
      ...contact
    }
    const response = await api.post("/storeContactQueries", request)
  }
  return (
    <Router>
      <Header />
      <main className='main'>
        <Route
          render={({ location }) => {
            const { pathname } = location;

            return (
              <AnimatePresence exitBeforeEnter={true}>
                <Switch location={location} key={pathname}>
                  {/* {
        window.location.pathname === '/dashboard' ? null : 
      } */}
                  <PublicRoute
                    restricted={false}
                    exact
                    path='/'
                    component={Home}
                  />
                  <PublicRoute
                    exact
                    restricted={false}
                    component={AboutUS}
                    path='/about'
                  />
                  <PublicRoute
                    restricted={true}
                    exact
                    path='/join-us'
                    component={Join}
                  />
                  <PublicRoute
                    restricted={true}
                    component={Login}
                    path='/login'
                    exact
                  />
                  <PublicRoute
                    restricted={true}
                    exact
                    path='/company/register'
                    component={EmailPassword}
                  />
                  <PublicRoute
                    restricted={true}
                    exact
                    path='/connector/register'
                    component={EmailPassword}
                  />
                  <PublicRoute
                    restricted={true}
                    exact
                    path='/company/createProject'
                    component={CreateProject}
                  />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <PrivateRoute
                    path='/connector/createprofile'
                    component={CreateConnectorProfile}
                  />

                  <Route path="/company/projects" component={Dashboard} />
                  <Route path="/company/connectors" exact component={Dashboard} />
                  {/*COMPANY ROUTES*/}
                  {/* <PrivateRoute exact path="/company/editProfile" component={EditCompanyProfile} /> */}
                  <PrivateRoute exact path='/common/chat' component={Chat} />

                  {/* <PublicRoute restricted={false} exact path="/tc" component={TnC} /> */}
                  <PublicRoute
                    restricted={false}
                    exact
                    path='/faqs'
                    component={FAQ}
                  />

                  <PublicRoute
                    restricted={false}
                    path='*'
                    component={ErrorPage}
                  />
                </Switch>
              </AnimatePresence>
            );
          }}
        />
      </main>
      <Contact addContactHandler={addContactHandler} />
      <Footer />
    </Router>
  );
}