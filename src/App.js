import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
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
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AllPosts from './Components/UsersPost/AllPosts'
import Addposts from './Components/UsersPost/AddPosts';
import PostComment from './Components/UserComment/AddComment'
import AllComments from './Components/UserComment/AllComments'
import EditPost from './Components/UsersPost/EditPost'
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';


const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  const token = localStorage.getItem("token")
  console.log(token);

  return (
    <Provider store={store}>

      <div className="App">
        <Router>
          <header >
            {!token ?
              (
                <li>
                  <Link to='/'>Sign Up</Link> {' '}
                  <Link to='/signin'>Signin In</Link>
                </li>
              )
              : (
                <li>
                  <Link to='/post'>All Post</Link>{' '}
                  <Link to='/addpost'>Add Post</Link>{' '}
                  <Link to='/logout'>Logout</Link>{' '}
                  <Link to='/Comment'>All Comments</Link>{' '}

                </li>
              )
            }

            <SearchBar />

            <Switch>
              <PrivateRoute exact path="/user" component={AllUsers} />
              <PrivateRoute exact path="/EditUsers/:id" component={EditUsers} />
              <PrivateRoute exact path="/logout" component={Logout} />
              <PublicRoute exact path="/" component={Signup} />
              <PublicRoute exact path="/signin" component={Signin} />
              <PrivateRoute exact path="/post" component={AllPosts} />
              <PrivateRoute exact path="/addpost" component={Addposts} />
              <PrivateRoute exact path="/EditPost/:id" component={EditPost} />
              <PrivateRoute exact path="/Comment/:id" component={PostComment} />
              <PrivateRoute exact path="/Comment" component={AllComments} />
              <Route exact path="/search" component={SearchBar} />
              <Route component={NotFound} />
            </Switch>

          </header>
        </Router>
      </div>
    </Provider>
  );

}


export default App;
