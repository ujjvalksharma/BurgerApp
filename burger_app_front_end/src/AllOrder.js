import React,{useContext, useEffect,useState} from 'react';
import {userContext} from './UserContext';
import axios from 'axios';
import {Table,thead,tr,th,tbody,td} from 'react-bootstrap';
import Title from './Title';
function AllOrder(){
    const userSubscriber=useContext(userContext);
    const [orders,setOrder]=useState([]);
    const userDetails=JSON.parse(sessionStorage.getItem('user'));
    useEffect(()=>{
         axios.get(`http://127.0.0.1:9000/User/findAllOrder/${userDetails.user_id}/`)
.then(response => {
    setOrder(response.data);
})
    .catch(error => {
      alert('Our server is facing is issue. We are unable to display your orders');
    });

    },[]);

return (<div>
    <br />
   <Title>Previous Orders</Title>
   <br />
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Address</th>
      <th>Ingredients</th>
      <th>status</th> 
      <th>price</th> 
    </tr>
  </thead>
  <tbody>
  {orders.map(order=>{
    return <tr>
      <td>{order.orderId}</td>
      <td>{order.street1}, {order.street2}, {order.city}, {order.state}, {order.zipcode}, India</td>
      <td>tomato: {order.tomato}, lettuse: {order.lettuse}, meat: {order.meat}, cheese:{order.cheese} </td>
      <td>{order.status}</td>
      <td>{order.totalAmount}</td>
                   </tr>
  })}
  </tbody>
</Table>
</div>)
}

export default AllOrder;