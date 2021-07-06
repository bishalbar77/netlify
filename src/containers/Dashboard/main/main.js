import "./main.css";
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Project from "../projects/projects";
import Connectors from "../company/connectors/connectors"
import { PublicRoute, PrivateRoute } from '../../../Routes';

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
        <Router>
          <Switch>
            <Route path="/dashboard" component={() => (
                <Project/>
              )}
            />
            <Route path="/company/projects" component={() => (
                <Project/>
              )}
            />
            <PrivateRoute restricted={true} path="/company/connectors" exact component={() => (
                <Connectors/>
              )}/>
          </Switch >
        </Router>
        </div>
      </div>
    </main>
  );
};

export default Main;