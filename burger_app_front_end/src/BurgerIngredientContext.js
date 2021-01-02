import React,{createContext,useReducer,useState}  from 'react';
export  const ingredientContext=createContext({});
function BurgerIngredientContext(props){

      const [ingredient] = useState({tomato:0,
        lettuse :0,
        meat:0,
        cheese:0,
      });
      const ingredientPrice={tomato:2,
        lettuse :2,
        meat:10,
        cheese:5,
      };

      const currency='$';
      const reducer = (intitalState, action) => {
        if(action.type === 'Tomato') {
         return {...intitalState,tomato:intitalState.tomato+action.incrementValue<0?0:intitalState.tomato+action.incrementValue};
        }
        if(action.type === 'Lettuse') {
          return {...intitalState,lettuse:intitalState.lettuse+action.incrementValue<0?0:intitalState.lettuse+action.incrementValue};
        }
        if(action.type === 'Meat') {
          return {...intitalState,meat:ingredient.meat+action.incrementValue<0?0:intitalState.meat+action.incrementValue};
        }
        if(action.type === 'Cheese') {
          return {...intitalState,cheese:ingredient.cheese+action.incrementValue<0?0:intitalState.cheese+action.incrementValue};
        }
        if(action.type === 'Reset') {
          return {...intitalState,cheese:0,meat:0,lettuse:0,tomato:0};
        }
      }
  
      const [newState, dispatch] = useReducer(reducer, ingredient);
  return (
    <ingredientContext.Provider value={{ingredientState:newState,ingredientDispatch:dispatch,ingredientPrice:ingredientPrice,currency:currency}}>
        {props.children}
        </ingredientContext.Provider>
  );
}

export default BurgerIngredientContext;