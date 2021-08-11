import './App.css';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

import AllUsers from './Components/AllUsers';
import EditUsers from './Components/EditUsers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers/reducer';
import thunk from 'redux-thunk';
import Signup from '../src/Components/Pages/Signup'
import Signin from './Components/Pages/Signin'
import { PrivateRoute } from './Route/PrivateRoute';
import { PublicRoute } from './Route/PublicRoute';
import Logout from './Components/Pages/Logout'


const store = createStore(reducer, applyMiddleware(thunk));
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header >
            <Link to='/'>Sign Up</Link><br/>
            <Link to='/logout'>Logout</Link>

            <Switch>
              <PrivateRoute exact path="/user" component={AllUsers} />
              <PrivateRoute exact path="/EditUsers/:id" component={EditUsers} />  
              <PrivateRoute exact path= "/logout" component={Logout}/>
              <PublicRoute exact path="/" component={Signup} />
              <PublicRoute exact path="/signin" component={Signin} />

            </Switch>
          </header>
        </Router>
      </div>
    </Provider>
  );

}
// }

export default App;
