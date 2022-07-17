
import {login,logout,loading} from '../store/ducks/auth'
import {api} from './api'
import {TokenVerify} from './token'





  export const authLogin = (user) => {
  return dispatch => {
  api.post('/sessions',user)
  .then(res =>{
    dispatch(loading())
    localStorage.setItem('token',res.data.token)
    localStorage.setItem('user',res.data.myUser.name)
    if (localStorage.getItem('token')===res.data.token) {
      
      dispatch(login(res.data.myUser.name))
    }
    else {
      
      TokenVerify(res.data.token)
      dispatch(logout())
    }
  }).catch( res => {

    console.log(res.response)
  });
  }
}