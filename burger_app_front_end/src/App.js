import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginSignUpNav from './LoginSignUpNav';
import BurgerIngredientContext from './BurgerIngredientContext';
import HCHomeNav from './HCHomeNav';
import {
  Route,
  Switch
} from "react-router-dom";
import { withRouter } from "react-router";
import UserContext from './UserContext';
function App(props) {

  function routerByUserSession(){
  if(!sessionStorage.getItem('user')){
   return (<Route   path="/" component={LoginSignUpNav}></Route> );
  }
  
}
return (
  <div>
   <BurgerIngredientContext> 
   <UserContext>
   <Switch>
  
   <Route  exact path="/" component={LoginSignUpNav}></Route>
   <Route exact path="/SignUp" component={LoginSignUpNav}></Route> 
   <Route exact path="/About" component={LoginSignUpNav}></Route> 
   <Route  exact path="/Login" component={LoginSignUpNav}></Route>
   {routerByUserSession()}
   <Route exact path="/Home" component={HCHomeNav}></Route>
    <Route exact path="/CheckOut" component={HCHomeNav}></Route>
    <Route exact path="/Setting" component={HCHomeNav}></Route>
    <Route exact path="/AllOrder" component={HCHomeNav}></Route>
           </Switch>
           </UserContext>
           </BurgerIngredientContext>  
      </div>
);


}

export default withRouter(App);
