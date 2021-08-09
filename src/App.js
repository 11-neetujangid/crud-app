import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import EditUsers from './Components/EditUsers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers/reducer';
import thunk from 'redux-thunk';
import Signup from '../src/Components/Pages/Signup'
import Signin from './Components/Pages/Signin'


const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header >

            <Link to='/'>Sign Up</Link>
            
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/user" component={AllUsers} />
              <Route exact path="/EditUsers/:id" component={EditUsers} />
              <Route exact path="/signup" component={Signup} />

            </Switch>
          </header>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
