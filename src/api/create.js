 import { api } from "./api"
 
 
 export const createUser = async (users) => {
  await api.post('/users',users).then(console.log('createUser'))
 }

 export const createProduct = async (products) => {
  await api.post('/product',products).then('createProduc')
 }
 export const createClients = async (clients) => {
  await api.post('/clients',clients).then('createClients')
 }
 export const createSales = async (sales) => {
  await api.post('/sales',sales).then('createClients')
 }