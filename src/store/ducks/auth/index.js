import {createAction, createReducer} from '@reduxjs/toolkit'

import { useState } from 'react'





const INIT ={
  isAuthenticated: localStorage.getItem('token'),
  isLoading:false,
  token: '',
  name: localStorage.getItem('user'),
 
}

export const login = createAction('LOGIN')
export const loading =createAction('LOADING')
export const logout = createAction('LOGOUT')


export default createReducer(INIT, {
  [login.type]:  (state, {payload}) => ({...state, isAuthenticated:true,isLoading:false,name:payload}),
  [loading.type]: (state, action) => ({...state, isAuthenticated:false,isLoading:true}),
  [logout.type]:  (state, action) => ({...state, isAuthenticated:false,isLoadingt:false}),
  
})