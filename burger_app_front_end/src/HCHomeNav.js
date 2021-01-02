import React from 'react';
import HomeNav from './HomeNav';
import Home from './Home';
import CheckOut from './CheckOut';
import Setting from './Setting';
import AllOrder from './AllOrder';
import {
    Route,
    Switch
  } from "react-router-dom";
function HCHomeNav(){
    return (
        <div>
<HomeNav />
  <Switch>
  <Route exact path="/Home" component={Home}></Route>
  <Route exact path="/CheckOut" component={CheckOut}></Route>
  <Route exact path="/Setting" component={Setting}></Route> 
  <Route exact path="/AllOrder" component={AllOrder}></Route>  
  </Switch>
  </div>
    );
}

export default HCHomeNav;