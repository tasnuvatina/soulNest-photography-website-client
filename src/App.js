import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './Components/User/User/User';
import Admin from './Components/Admin/Admin/Admin'
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute';


export const userContext=createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
  return (
    <userContext.Provider value={{loggedInUser, setLoggedInUser,isUserLoggedIn,setIsUserLoggedIn}}>
      <Router>
        <Switch>
        <PrivateRoute path ='/admin/:adminTask/:email'>
          <Admin></Admin>
          </PrivateRoute>
          <Route path ='/login'>
          <Login></Login>
          </Route>
        <PrivateRoute path ='/user/:task/:id'>
          <User></User>
          </PrivateRoute>
          <Route exact path ='/'>
          <Home></Home>
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
