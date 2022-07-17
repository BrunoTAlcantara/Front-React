import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'




const AuthRoute = ({children}) => {
  const { isAuthenticated, isLoading,name} = useSelector(state => state.auth)
    if(isLoading) {
      return <h1>CARREGANDO</h1>
    }
    if(!isAuthenticated){
      
      return <Navigate to='/login'/>
    }
    console.log(name)
    console.log(isLoading,'oi')
    
    return children
}

const NotAuthRoute = ({children}) => {
  const { isAuthenticated} = useSelector(state => state.auth)
    if(isAuthenticated){
      return <Navigate to='/'/>
    }
  
    return children
}




export {NotAuthRoute,AuthRoute}
