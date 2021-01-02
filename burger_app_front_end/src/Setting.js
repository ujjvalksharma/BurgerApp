import React from 'react';
import Title from './Title';
import Button from './Button';
import InputElement from './Input';
function Setting(props){
    const widthStyle={width: '400px'};
    function onSubmit(e){
  
        e.preventDefault();
          alert('Your changes are implemented!!');
          props.history.push('/Setting');
        }

    return (<div>
        <center>
        <br />
<Title>Settings</Title>
<br />
         <form onSubmit={e => onSubmit(e)} >
<div className="form-group">

<label className="sr-only" htmlFor="street1">First Name:</label>
      <InputElement type="text" classValue="form-control input-sm" id="firstName" placeholderValue="Enter First Name" styleValue={widthStyle}  nameValue="firstName" />
      <br />
    </div>
  
    <div className="form-group">
    <label className="sr-only" htmlFor="street2">Last Name:</label>
      <InputElement type="text" classValue="form-control input-sm" id="lastName" placeholderValue="Enter Last name"  styleValue={widthStyle}  nameValue="lastName" />
    </div>
    <br />
    <div className="form-group">
    <label className="sr-only" htmlFor="zipcode">Password:</label>
      <InputElement  type="password" classValue="form-control input-sm" id="password" placeholderValue="Enter Password"  styleValue={widthStyle}  nameValue="password"/>
    </div>
    <br />
<Button classValue="btn btn-success" type='submit'>Confirm Changes</Button>
</form>
</center>
    </div>);
}

export default Setting;