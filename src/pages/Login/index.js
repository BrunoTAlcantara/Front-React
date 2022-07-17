import { Button, Checkbox, Form, Input, message } from 'antd';
import './index.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../api/authLogin'
import {useSelector} from 'react-redux'




export const error = (res) => {

  if (res===true) {

    message.error('Usuário e/ou senha inválidos');
  }
  
};



function Login(){

  const dispatch = useDispatch()
  

  const onFinish = ({user,password}) => {
    dispatch(authLogin({user,password}))
    return console.log (user)

 
  };

   const onFinishFailed = (response) => {
    console.log(response)
   
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
            message: 'Insira seu usuario Cadastrado',
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
            message: 'Insira sua senha Cadastrada',
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
        <Button style={{margin:'20px', background:'gray',border:'none'}} onClick={error} type="primary" htmlType="submit">
          Login
        </Button>
      
        <Button type="primary" onClick={error}  htmlType="button" href='https://front-react-jet.vercel.app/register'>
          Registrar
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  );
  
}

export {Login}