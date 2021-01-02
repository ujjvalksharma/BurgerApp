import {Nav} from 'react-bootstrap';
import React, { useContext } from 'react';
import {
  Link
} from "react-router-dom";
import {userContext} from './UserContext';
function HomeNav(){
  const userSubscriber=useContext(userContext);
  const userDetails=JSON.parse(sessionStorage.getItem('user'));
return (<div>
 <Nav >
 <Nav.Item  > 
    <Nav.Link >Welcome {userDetails.firstName} {userDetails.lastName} </Nav.Link>
  </Nav.Item>
  <Nav.Item  > 
    <Nav.Link ><Link to='/Home'> Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to='/CheckOut'>Cart</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to='/Setting'>Setting</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><Link to='/Login'>Logout</Link></Nav.Link>
  </Nav.Item> 
  <Nav.Item>
    <Nav.Link ><Link to='/AllOrder'>All Orders</Link></Nav.Link>
  </Nav.Item>   
</Nav>
</div>)
}
export default HomeNav;