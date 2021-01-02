import React from 'react';
import LoginNav from './LoginNav';
import SignUp from './SignUp';
import Login from './Login'; 
import About from './About';
import {
    Route,
    Switch
  } from "react-router-dom";
function LoginSignUpNav(){
    return (
        <div>
        <LoginNav />
        <Switch>
   <Route  exact path="/Login" component={Login}></Route>
   <Route  exact path="/" component={Login}></Route>
   <Route exact path="/SignUp" component={SignUp}></Route> 
   <Route exact path="/About" component={About}></Route> 
   <Route   path="/" component={Login}></Route>
    </Switch>
        </div>
    );
}

export default LoginSignUpNav;