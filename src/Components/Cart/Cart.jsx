import React from 'react'
import { useUserContext } from '../../context/UserContextProvider'

function Cart() {
    const useUser = useUserContext();
    // console.log(useUser);
  return (
    <div>
       
        <button onClick={() => useUser.setUser(useUser.user+1)}>click</button>
    </div>
  )
}

export default Cart