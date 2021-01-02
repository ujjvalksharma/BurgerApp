import React from 'react';

const Button=(props)=>{
    return     <button type={props.type} className={props.classValue}  onClick={props.clickHandler}>{props.children}</button>; 
}
export default React.memo(Button);