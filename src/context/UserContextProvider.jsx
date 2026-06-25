import React, { useContext, useState } from "react";
import UserContext from "./UseContext";

export const useUserContext = () =>{
    return useContext(UserContext)
} 

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(0);

    return(
        <UserContext.Provider value={{user,setUser}}>
       
            {children}

        </UserContext.Provider>
    )
}

export default UserContextProvider;