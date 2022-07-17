import { api } from "./api"
 
 
export const GetClient = async () => {
 await api.get('/users')
 .then(res =>{
   const response =res.json
  return response
 })
 .catch(console.log(Error))

}