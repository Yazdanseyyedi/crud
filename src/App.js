// import {Provider} from "react-redux";
// import store from "./redux/store";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {RoutePath} from "./data/route";
import FormPage from "./components/formPage/formPage"
import ApiPage from "./components/apiPage/apiPage"
import "./App.css"
import Header from "./components/header/header";

function App() {
    return (
             <Router>
              <Header/>
              <Switch>
                <Route path={RoutePath.formPage} component={FormPage}/>
                <Route path={RoutePath.apiPage} component={ApiPage}/>
                <Route exact path="/">
                  <Redirect to={RoutePath.formPage}/>
                </Route>
              </Switch>
          </Router>
    );
}

export default App;
