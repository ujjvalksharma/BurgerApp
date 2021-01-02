import React,{useContext, useEffect,useState} from 'react';
import {ingredientContext} from './BurgerIngredientContext';
import Title from './Title';
import Button from './Button';
import Paragraph from './Paragraph';
import InputElement from './Input';
import {userContext} from './UserContext';
import axios from 'axios';
function Checkout(props) {

const userSubscriber=useContext(userContext);
const ingredientSubscriber=useContext(ingredientContext);
const [order,setOrder]=useState({});
const userDetails=JSON.parse(sessionStorage.getItem('user'));
useEffect(()=>{

  setOrder({
    street1:"",
    street2:"",
    city:"",
    zipcode:"",
    state:"",
     tomato:ingredientSubscriber.ingredientState.tomato,
     lettuse:ingredientSubscriber.ingredientState.lettuse,
     meat:ingredientSubscriber.ingredientState.meat,
     cheese:ingredientSubscriber.ingredientState.cheese,
    status:'Pending',
    totalAmount:totalAmount
  });
},[])


    const tomatoAmount=ingredientSubscriber.ingredientState.tomato*ingredientSubscriber.ingredientPrice.tomato;
const tomotoDesc='Tomato:' 
+ingredientSubscriber.ingredientState.tomato
+' X '+ingredientSubscriber.ingredientPrice.tomato
+'='+ingredientSubscriber.currency
+' '
+(tomatoAmount);
const lettuseAmount=ingredientSubscriber.ingredientState.lettuse*ingredientSubscriber.ingredientPrice.lettuse;
const lettuseDesc='Lettuse:' 
+ingredientSubscriber.ingredientState.lettuse
+' X '+ingredientSubscriber.ingredientPrice.lettuse
+'='+ingredientSubscriber.currency
+' '
+(lettuseAmount);
const cheeseAmount=ingredientSubscriber.ingredientState.cheese*ingredientSubscriber.ingredientPrice.cheese;
const cheeseDesc='Cheese:' 
+ingredientSubscriber.ingredientState.cheese
+' X '+ingredientSubscriber.ingredientPrice.cheese
+'='+ingredientSubscriber.currency
+' '
+(cheeseAmount);

const meatAmount=ingredientSubscriber.ingredientState.meat*ingredientSubscriber.ingredientPrice.meat;
const meatDesc='Meat:' 
+ingredientSubscriber.ingredientState.meat
+' X '+ingredientSubscriber.ingredientPrice.meat
+'='+ingredientSubscriber.currency
+' '
+(meatAmount);
const totalAmount=meatAmount+cheeseAmount+lettuseAmount+tomatoAmount;
const finalAmountDesc='Total Amount: ' +ingredientSubscriber.currency +' '+totalAmount;


const onSubmit = e => {
  
  e.preventDefault();
  if(order.street1===''||order.city===''||order.zipcode===''||order.state===''){
    alert('Input feilds are empty!!');
  }
   axios.post(`http://127.0.0.1:9000/User/addOrder/${userDetails.user_id}`,order)
.then(response => {
  alert('Your order has been placed');
  ingredientSubscriber.ingredientDispatch({type:'Reset'});
  props.history.push('/AllOrder');
})
    .catch(error => {
      alert('Please place the order again or enter all feilds');
    });
   
  }


  function clickHandler(event,inputName){
        
    if(inputName==="street1"){
      setOrder(prevState=>({...prevState,street1:event.target.value}));
    }
    
    if(inputName==="street2"){
      setOrder(prevState=>({...prevState,street2:event.target.value}));
    }

    if(inputName==="city"){
      setOrder(prevState=>({...prevState,city:event.target.value}));
    }
  
    if(inputName==="zipcode"){
      setOrder(prevState=>({...prevState,zipcode:event.target.value}));
    } 

    if(inputName==="state"){
      setOrder(prevState=>({...prevState,state:event.target.value}));
    }
       }


return (
    <div>
      <center>  <Title>Please check out my order </Title></center> 
<Paragraph>{tomotoDesc}</Paragraph>
<Paragraph>{lettuseDesc}</Paragraph>
<Paragraph>{cheeseDesc}</Paragraph> 
<Paragraph>{meatDesc}</Paragraph>
<Paragraph>{finalAmountDesc}</Paragraph>

<Title>Please fill the delivery address</Title>
<form onSubmit={e => onSubmit(e)}>
<div className="form-group">
<label className="sr-only" htmlFor="street1">Street1:</label>
      <InputElement type="text" classValue="form-control" id="street1" placeholderValue="Enter street1"  nameValue="street1" clickHandler={clickHandler}/>
      <br />
    </div>
  
    <div className="form-group">
    <label className="sr-only" htmlFor="street2">Street2:</label>
      <InputElement type="text" classValue="form-control" id="street2" placeholderValue="Enter street2"  nameValue="street2" clickHandler={clickHandler}/>
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="city">City:</label>
      <InputElement type="text" classValue="form-control" id="city" placeholderValue="Enter city"  nameValue="city" clickHandler={clickHandler} />
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="zipcode">Zipcode:</label>
      <InputElement  type="number" classValue="form-control" id="zipcode" placeholderValue="Enter zipcode"  nameValue="zipcode" clickHandler={clickHandler}/>
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="state">State:</label>
      <InputElement type="text" classValue="form-control" id="state" placeholderValue="Enter state"  nameValue="state" clickHandler={clickHandler}/>
    </div>
    <br />
<Button classValue="btn btn-success" type='submit'>Deliver My Order</Button>
</form>
    </div>
);

}

export default Checkout;
