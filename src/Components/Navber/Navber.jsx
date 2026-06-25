import React from 'react'
import { useUserContext } from '../../context/UserContextProvider'

function Navber() {

    const useUser = useUserContext();
  return (
    <div className='flex justify-between items-center'>
        <div>logo</div>
        <div>user:{useUser.user}</div>
    </div>
  )
}

export default Navber