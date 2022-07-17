import { Button, Form, Input} from 'antd';
import './index.css';
import {createClients} from '../../api/create'

export const FormClients = () => {


  const onFinish = (values) => {
    createClients(values)
  };

  const onFinishFailed = (errorInfo) => {
    
  };

  return (
    <div className="FormFormat">
    <Form  className="Form"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 20 }}
      label="nest-messages" onFinish={onFinish} >
      <Form.Item 
        name="social"
        label="Razão Social"
        rules={[
          {
            message: 'Coloque uma Razão Social valida',
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="cnpj"
        label="Cnpj"
        rules={[
          {
            message: 'Coloque um Cnpj Valido',
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="ender"
        label="Endereço"
        rules={[
          {
            message: 'Coloque um Endereço Valido',
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
    
      <Form.Item  wrapperCol={{ offset: 12, span: 25 }} >
        <Button type="primary" htmlType="submit">
         Cadastrar Cliente
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


