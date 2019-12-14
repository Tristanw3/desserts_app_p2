import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SummerHome} from './components/Home/SummerHome';
// import {WinterHome} from './components/Home/WinterHome';
import {Order} from './pages/Order';
import {Purchase} from './pages/Purchase';
import {Login} from './components/Login/Login';
import {Signup} from './components/Signup/Signup';
import {NoMatch} from './pages/NoMatch';
import {NavigationBar} from './components/NavigationBar';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
          <Router>
            <Switch>
            <Route exact path="/" component={SummerHome} />
              <Route path="/order" component={Order} />
              <Route path="/purchase" component={Purchase} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  } 
}


export default App;
