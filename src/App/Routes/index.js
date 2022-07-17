import React from "react";


import {BrowserRouter, Route, Routes,} from 'react-router-dom'





import {Login} from '../../pages/Login'
import { Register } from "../../pages/Register";
import {AuthRoute,NotAuthRoute} from './private'
import {ClientsCreate} from '../../pages/Clientes/ClientsCreate'
import {ClientsList} from '../../pages/Clientes/ClientsList'
import {ListProduct} from '../../pages/Produtos/ListProduct'
import {CreateProduct} from '../../pages/Produtos/CreateProduct'
import {CreateVenda} from '../../pages/Vendas/CreateVenda'
import {ListVenda} from '../../pages/Vendas/ListVenda'




const AppRoutes = () => {

return(
  <BrowserRouter>
    <Routes>
      
      <Route exact path="/login"element={
        <NotAuthRoute><Login/></NotAuthRoute>}></Route>
      <Route exact path="/register"element={<Register/>}></Route>
      <Route exact path="/"element={
         <AuthRoute>
          <ClientsList/>
         </AuthRoute>  
      }></Route>
      <Route exact path="/clients-create"element={
         <AuthRoute>
          <ClientsCreate/>
         </AuthRoute>  
          }>
      </Route>

        <Route exact path="/product-list"element={
         <AuthRoute>
          <ListProduct/>
         </AuthRoute>  
             }>
        </Route>  


        <Route exact path="/product-create"element={
         <AuthRoute>
          <CreateProduct/>
         </AuthRoute>  
             }>
        </Route>

        <Route exact path="/sales-create"element={
         <AuthRoute>
          <CreateVenda/>
         </AuthRoute>  
             }>
        </Route>

        <Route exact path="/sales-list"element={
         <AuthRoute>
          <ListVenda/>
         </AuthRoute>  
             }>
        </Route>
        
          


   
    </Routes>
    </BrowserRouter>
  
  )
}

export{AppRoutes}

