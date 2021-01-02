import React, { useContext  } from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

import topImg from './assets/top.jpg';
import bottomImg from './assets/bottom.jpg';

import cheeseImg from './assets/cheese.jpg';
import tomatoImg from './assets/tomato.jpg';
import lettuseImg from './assets/lettuse.jpg';
import meatImg from './assets/meat.jpg';
import Button from './Button';
import {ingredientContext} from './BurgerIngredientContext';

function Home(props) {
  const ingredientSubscriber=useContext(ingredientContext);
let burger=[];
 function burgerContent(){
        // outputting the lettuce
        for (let i = 0; i < ingredientSubscriber.ingredientState.lettuse; i++){
          let key="L"+i;
            burger.push(<div key={key}><img src={lettuseImg} alt=" lettuse not found" /><br /></div>);
        }
        // outputting the tomato
        for (let i = 0; i < ingredientSubscriber.ingredientState.tomato; i++){
          let key="T"+i;
            burger.push(<div key={key}> <img src={tomatoImg} alt="tomato not found" /><br /></div>);
        }
        // outputting the cheese
        for (let i = 0; i < ingredientSubscriber.ingredientState.cheese; i++){
          let key="C"+i;
            burger.push(<div key={key}> <img src={cheeseImg} alt=" cheese  not found" /><br /></div>);
        }
        // outputting the meat
        for (let i = 0; i < ingredientSubscriber.ingredientState.meat; i++){
          let key="M"+i;
            burger.push(<div key={key}> <img src={meatImg} alt=" meat not found" /><br /></div>);
        }
        return burger;
    }
const tomatoText='Number of tomatos:'+ingredientSubscriber.ingredientState.tomato;
const meatText='Number of meat:'+ingredientSubscriber.ingredientState.meat;
const lettuseText='Number of lettuse:'+ingredientSubscriber.ingredientState.lettuse;
const cheeseText='Number of cheese:'+ingredientSubscriber.ingredientState.cheese;
function onSubmit(e){
  e.preventDefault();
  if(burgerContent().length===0){
    alert('Please enter ingredients to be billed');
    return false;
  }
  alert('Your order has been checkout please procceed to billing');
  props.history.push('/CheckOut');
  return true;
}

  return (
   <div>
    <center>
      <Title>
      Build your Burger!!
        </Title>
        <br />
    <img src={topImg} alt=" not found" />
    <br />
    {burgerContent()}
    <img src={bottomImg} alt=" not found" />
    <Paragraph>{tomatoText}</Paragraph>
    <Paragraph>{meatText}</Paragraph>
   <Paragraph>{lettuseText}</Paragraph>
   <Paragraph>{cheeseText}</Paragraph>
<Button type='button' classValue="btn btn-primary" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Tomato',incrementValue:1})}>Add tomato</Button>
<Button type='button' classValue="btn btn-danger" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Tomato',incrementValue:-1})}>Remove tomato</Button>
<br />
<Button type='button' classValue="btn btn-primary" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Lettuse',incrementValue:1})}>Add lettuse</Button>
<Button type='button' classValue="btn btn-danger" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Lettuse',incrementValue:-1})}>Remove lettuse</Button>
<br />
<Button type='button' classValue="btn btn-primary" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Meat',incrementValue:1})}>Add meat</Button>
<Button type='button' classValue="btn btn-danger" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Meat',incrementValue:-1})}>Remove meat</Button>
<br />
<Button type='button' classValue="btn btn-primary" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Cheese',incrementValue:1})}>Add cheese</Button>
<Button type='button' classValue="btn btn-danger" clickHandler={()=>ingredientSubscriber.ingredientDispatch({type:'Cheese',incrementValue:-1})}>Remove cheese</Button>
<br />
<br />
<form >
<Button classValue="btn btn-success" type='button' clickHandler={(e)=>onSubmit(e)}>Add to Cart</Button>
</form>
    </center>
    </div>
  );
  
}

export default Home;
