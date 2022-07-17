import { Button, Checkbox, Form, Input,InputNumber } from 'antd';
import './index.css';
import {createProduct} from '../../api/create'

export const FormProduct = () => {




  
  const onFinish = (values) => {
    createProduct(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="FormFormat">
    <Form  className="Form"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 20 }}
      label="nest-messages" onFinish={onFinish} >
      <Form.Item 
        name="desc"
        label="Descrição"
        rules={[
          {
            message: 'Coloque uma descrição breve',
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="unMed"
        label="Unidade de medida"
        rules={[
          {
            message: 'Coloque uma Unidade de Medida',
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="preco"
        label="Preço"
        rules={[
          {
            type: 'number',
            message: 'Coloque um Preço Correto',
            min: 0,
            max: 15,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="valor"
        label="Valor"
        rules={[
          {
            type: 'number',
            message: 'Coloque um Valor Correto',
            min: 0,
            max: 15,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    
      <Form.Item  wrapperCol={{ offset: 12, span: 25 }} >
        <Button type="primary" htmlType="submit">
         Cadastrar Produto
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


