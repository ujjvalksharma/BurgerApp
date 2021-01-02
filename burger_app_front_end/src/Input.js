import React from 'react';

const InputElement=(props)=>{
    return     <input type={props.type} className={props.classValue} id={props.id} style={props.styleValue} name={props.nameValue} 
    placeholder={props.placeholderValue} onChange={(e)=>props.clickHandler(e,props.nameValue)}>{props.children}</input>; 
}
export default React.memo(InputElement);