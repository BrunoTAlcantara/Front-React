import { Button, Form, Input,message,InputNumber} from 'antd';
import './index.css';
import {createClients} from '../../api/create'


export const error = (res) => {

  if (res===true) {

    message.error('Cnpj ja existe/invalido');
  }
  if (res===false) {
    
     message.success(' Cliente criado com sucesso');

  }
  
  
};

export const FormClients = () => {


  const onFinish = (values) => {
    createClients(values)
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
            min: 5,
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
            message: 'Coloque um Cnpj Valido ',
            required: true,

          },
        ]}
      >
       <InputNumber />
      </Form.Item>
      <Form.Item 
        name="ender"
        label="Endereço"
        rules={[
          {
            message: 'Coloque um Endereço Valido',
            required: true,
            type:'string',
            min: 10,
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


