import axios from 'axios'

 const api = axios.create({
   baseURL: 'https://backend-nodejs-bruno.herokuapp.com'
})



export{ api }