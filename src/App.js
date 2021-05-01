import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Admin from './components/AdminPanel/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Header from './components/Header/Header';

import NoMatch from './components/NoMatch/NoMatch';
// import UserOrder from './components/UserOrder/UserOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';
import UserOrderItem from './components/UserOrder/UserOrderItem/UserOrderItem';




export const userCreate = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [addCart, setAddCart] = useState([]);

  return (
    <userCreate.Provider value={[loggedInUser, setLoggedInUser, addCart, setAddCart]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path="/order">
            <UserOrderItem></UserOrderItem>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id'>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </userCreate.Provider>


  );
}

export default App;
