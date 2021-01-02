import React, { useState } from 'react';
import Title from './Title';
import Button from './Button';
import InputElement from './Input';
import axios from 'axios';
function SignUp(props){

  const [user,setUser]=useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      password:""

    })
  const widthStyle={width: '400px'};

  function onSubmit(e){
  
    e.preventDefault();
    if(user.firstName===''||user.lastName===''||user.email===''||user.password===''){
alert('Input feilds are empty!!');
return;
    }
    axios.post('http://127.0.0.1:9000/User/add', user)
    .then(response => {
      alert('Your account has been created.Please login!!');
      props.history.push('/Login');
    })
        .catch(error => {
          alert('Please change the email. There is an existing account with this email');
          console.log(error);
          props.history.push('/SignUp');
        });
      
      }

   function clickHandler(event,inputName){
if(inputName==="firstName"){
  console.log("firstName changing..");
  setUser(prevState=>({...prevState,firstName:event.target.value}));
}
if(inputName==="lastName"){
  setUser(prevState=>({...prevState,lastName:event.target.value}));
}

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
  <Title>Welcome to Burger App!!</Title>
  <form onSubmit={e => onSubmit(e)} >
<div className="form-group">

<label className="sr-only" htmlFor="firstName">First Name:</label>
      <InputElement type="text" classValue="form-control input-sm" id="firstName" placeholderValue="Enter First Name" styleValue={widthStyle}  nameValue="firstName" clickHandler={clickHandler}/>
      <br />
    </div>
  
    <div className="form-group">
    <label className="sr-only" htmlFor="lastName">Last Name:</label>
      <InputElement type="text" classValue="form-control input-sm" id="lastName" placeholderValue="Enter Last name"  styleValue={widthStyle}  nameValue="lastName" clickHandler={clickHandler}/>
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="email">Email:</label>
      <InputElement type="text" classValue="form-control input-sm" id="email" placeholderValue="Enter Email" styleValue={widthStyle}   nameValue="email" clickHandler={clickHandler} />
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="password">Password:</label>
      <InputElement  type="password" classValue="form-control input-sm" id="password" placeholderValue="Enter Password"  styleValue={widthStyle}  nameValue="password" clickHandler={clickHandler}/>
    </div>
    <br />
<Button classValue="btn btn-success" type='submit'>Sign Up</Button>
</form>


</center>

        </div>
    );
  ;
}

export default SignUp;