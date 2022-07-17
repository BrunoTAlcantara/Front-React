
import {useSelector} from 'react-redux'
import { useState } from 'react'



const TokenVerify = () => {
  const {token} = useSelector(state => state.auth)

  const [newt,useNet] = useState('false') 


  const savetoken = token
  if (savetoken  ===  localStorage.getItem('token')) {
    return true
  }
  else {
    return false
  }
}
export {TokenVerify}