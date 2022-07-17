import { Button, Form, Input,InputNumber,message } from 'antd';
import './index.css';
import {createProduct} from '../../api/create'



export const error = (res) => {

  if (res===true) {

    message.error('Error');
  }
  if (res===false) {
    
     message.success('Produto criado com sucesso');

  }
  
  
};

export const FormProduct = () => {




  
  const onFinish = (values) => {
    createProduct(values)
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
            type:'string',
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
            message: 'Coloque uma Unidade de Medida valida',
            required: true,
            type:'string',
            min: 2,
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


