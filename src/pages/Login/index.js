import { Button, Checkbox, Form, Input } from 'antd';
import './index.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../api/authLogin'
import { Alert } from 'antd';
import {useSelector} from 'react-redux'

function Login(){
  const { isAuthenticated, isLoading,token} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  


  
  const onFinish = ({user,password}) => {
    dispatch(authLogin({user,password}))
    console.log(isAuthenticated, isLoading)
  };

  const onFinishFailed = () => {
    console.log('DEU ERRADO')
  };

  return (
    <div className="template">
    <Form
    style={{width: '300px'}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

 
      <Form.Item
        label="Usuario"
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Lembrar-me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{margin:'20px', background:'gray',border:'none'}} type="primary" htmlType="submit">
          Login
        </Button>
      
        <Button type="primary" htmlType="button" href='https://front-react-jet.vercel.app/register'>
          Registrar
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  );
  
}

export {Login}