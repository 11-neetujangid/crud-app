import './App.css';
import { BrowserRouter as Router, Link ,Switch, Route } from 'react-router-dom';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import EditUsers from './Components/EditUsers';
import { Provider } from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducer from './Reducers/reducer';
import thunk from 'redux-thunk';


const store = createStore(reducer,applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <header >  
          <Link to='/'>All Users</Link><br/>
          <Link to='/add'>Add Users</Link>
          <Switch>
            <Route exact path="/" component={AllUsers}/>
            <Route exact path="/add" component={AddUsers}/>
            <Route exact path="/EditUsers/:id" component={EditUsers}/>
          </Switch>
        </header>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
