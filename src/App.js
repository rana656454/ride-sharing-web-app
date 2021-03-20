import React,{createContext,useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Notfound from './components/nofound/Notfound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Rideshare from './components/rideshare/Rideshare';
import PrivateRoute from './components/privateroute/PrivateRoute';
export const userContext = createContext()
function App() {
  const [loggedInUser,setloggedInUser] = useState({})
  return (
    <div className="">
    <userContext.Provider value={[loggedInUser,setloggedInUser]}>
    <Router>
       <Switch>
       <Route path="/home">
         <Home></Home>
         </Route>
         <Route path="/login">
         <Login></Login>
         </Route>
         <PrivateRoute path={`/rideshare/:id`}>
         <Rideshare></Rideshare>
         </PrivateRoute>

         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="*">
         <Notfound></Notfound>
         </Route>

       </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;
