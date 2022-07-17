import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../api/authLogin'
import {createUser} from '../../api/create'

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
            message: 'Please input your username!',
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
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" htmlType="button" href='http://localhost:3000/login'>
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
  
}

export {Register}