import React from 'react';
import * as reactBootStrap from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
function LoginNav(){
return (<div>
 <reactBootStrap.Nav 
>
  <reactBootStrap.Nav.Item  > 
    <reactBootStrap.Nav.Link ><Link to='/Login'> Login</Link></reactBootStrap.Nav.Link>
  </reactBootStrap.Nav.Item>
  <reactBootStrap.Nav.Item>
    <reactBootStrap.Nav.Link ><Link to='/SignUp'>Sign Up</Link></reactBootStrap.Nav.Link>
  </reactBootStrap.Nav.Item>
  <reactBootStrap.Nav.Item>
    <reactBootStrap.Nav.Link ><Link to='/About'>About</Link></reactBootStrap.Nav.Link>
  </reactBootStrap.Nav.Item>
</reactBootStrap.Nav>
</div>)
}
export default LoginNav;