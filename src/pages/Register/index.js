import { Button, Checkbox, Form, Input,message } from 'antd';
import React from 'react';

import {createUser} from '../../api/create'



 export const error = async (res) => {
  if (res===true) {

    await message.error('Usuário já existe');
  }
  if (res===false) {
    
    await message.success('Conta criada com sucesso');


  }
  
};



function Register(){



  const onFinish = (value) => {
    createUser(value)
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  };

  return (

    <div className="template">
    <Form
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
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: 'Seu nome deve ser maior que 3 caracteres',
            max:50,
            min: 3
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Usuario"
        name="user"
        rules={[
          {
            required: true,
            message: 'Insira seu Usuario',
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
            message: 'Insira sua senha deve ser maior que 3 caracteres',
            max:50,
            min: 3
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
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={error} htmlType="submit">
          Criar Conta
        </Button>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
      <Button onClick={Response} type="primary" htmlType="button" href='https://front-react-jet.vercel.app/login'>
          Login
        </Button>
        
      </Form.Item>

    </Form>
    </div>
  );
  
}

export {Register}