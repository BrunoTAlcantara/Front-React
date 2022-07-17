
import { api } from "./api"

import {error as errorUser} from '../pages/Register/index'
import {error as errorClients} from '../components/FormClients'
import {error as errorProduct} from '../components/FormProduct'
import {error as errorSales} from '../components/FormSales'
 
 export const createUser = async (users) => {
  await api.post('/users',users)
  .then(res => {
    errorUser(false)
  }).catch(err => {
    errorUser(true)
  })
 }

 export const createProduct = async (products) => {
  await api.post('/product',products).then(res => {
    errorProduct(false)
  }).catch(err => {
    errorProduct(true)
  })
 }
 export const createClients = async (clients) => {
  await api.post('/clients',clients).then(res => {
    errorClients(false)
  }).catch(err => {
    errorClients(true)
  })
 }
 export const createSales = async (sales) => {
  await api.post('/sales',sales).then(res => {
    errorSales(false)
  }).catch(err => {
    errorSales(true)
  })
 }