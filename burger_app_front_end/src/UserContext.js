import React,{createContext,useState}  from 'react';
export  const userContext=createContext({});
function UserContext(props){
    const [user,setUser]=useState({});
//console.log(user);
    return (
        <userContext.Provider value={{user,setUser}}>
            {props.children}
            </userContext.Provider>
      );

}

export default UserContext;