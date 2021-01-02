import React, { useState,useContext, useEffect } from 'react';
import Title from './Title';
import Button from './Button';
import InputElement from './Input';
import axios from 'axios';
import {userContext} from './UserContext';

function Login(props){

  const userSubscriber=useContext(userContext);
  sessionStorage.removeItem('user');
  const [user,setUser]=useState(
    {
      email:"",
      password:"",

    })
    const [loginUser,setLoginUser]=useState({})
  const widthStyle={width: '400px'};

const onSubmit = async e => {
e.preventDefault();

if(user.email===''||user.password===''){
  alert('Input feilds are empty!!');
  return;
      }
await axios.get(`http://127.0.0.1:9000/User/find/${user.email}/${user.password}`)
.then(response => {
  if(response.data){
 setLoginUser(response.data);
 sessionStorage.setItem('user',JSON.stringify(response.data));
  }
  else{
    alert('Incorrect password and email');
  }
})
    .catch(error => {
      alert('We are experiencing heavy load. Try again!!');
    });
}
  
useEffect(()=>{

  if(JSON.stringify(loginUser) !== JSON.stringify({})){
    userSubscriber.setUser(loginUser);
    props.history.push('/Home');
  }
},[loginUser])


      function clickHandler(event,inputName){
        
        if(inputName==="email"){
          setUser(prevState=>({...prevState,email:event.target.value}));
        }
        
        if(inputName==="password"){
          setUser(prevState=>({...prevState,password:event.target.value}));
        }
           }

    return (
        
        <div>
            
            <center>
            <br />
<br />
  <Title>Login</Title>
  <form onSubmit={e => onSubmit(e)}>
    <div className="form-group">
    <label className="sr-only" htmlFor="email">Email:</label>
      <InputElement type="text" classValue="form-control" id="email" placeholderValue="Enter Email" styleValue={widthStyle} nameValue="email" clickHandler={clickHandler} />
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="password">Password:</label>
      <InputElement  type="password" classValue="form-control" id="password" placeholderValue="Enter Password"  styleValue={widthStyle} nameValue="password" clickHandler={clickHandler}/>
    </div>
    <br />
<Button classValue="btn btn-success" type='submit'>Login</Button>
</form>
</center>
        </div>
    );
  ;
}

export default Login;