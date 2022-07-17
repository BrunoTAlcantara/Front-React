import { Button,  Form, Input,InputNumber,Select,message } from 'antd';
import {useState,useEffect} from 'react';

import {api} from '../../api/api'
import './index.css';
import {createSales} from '../../api/create'
const { Option } = Select;


export const error = (res) => {

  if (res===true) {

    message.error('Error');
  }
  if (res===false) {
    
    message.success('Venda criada com sucesso');


  }
  
  
};

export const FormSales = () => {

 
  const [clients,setClients] = useState([])
  const [products,setProducts] = useState([])


   useEffect(()=>{
     api.get('/clients').then(client => {
       const clients = client.data
       setClients(clients)})
    api.get('/product').then(product => {
      const products = product.data
      setProducts(products)
      })
   },[])
  const onFinish = (values) => {
    console.log(values)
    createSales(values)
  };


  products.map(product => console.log(product.desc))

  return (
    <div className="FormFormat">

   



    <Form  className="Form"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 20 }}
      label="nest-messages" onFinish={onFinish} >

<Form.Item
        name="products"
        label="Produtos"
        hasFeedback
        rules={[{ message: 'Selecione um produto',
        required: true,}]}
      >
        <Select placeholder="Selecione um Produto">

          {products.map(product => (
            <Option key={product.id} value={product.id}> {product.desc} </Option>
          ))}
           
        
          
        </Select>

      </Form.Item>  
      <Form.Item
        name="clients"
        label="Clientes"
        hasFeedback
        rules={[{ message: 'Selecione um Cliente',
        required: true,}]}
      >
       <Select  placeholder="Selecione um Cliente">

          {clients.map(client => (
              <Option key={client.id} value={client.id}> {client.social} </Option>
              
            ))}
   

  
          </Select>
        
          
        

      </Form.Item> 



      <Form.Item
        name="status"
        label="Status"
        hasFeedback
        rules={[{ message: 'Selecione um Status',
        required: true,}]}
      >
       <Select  placeholder="Selecione um Status">

          
              <Option value={false}>Pendente </Option>
              <Option value={true}>Aprovado</Option>
              
            
   

  
          </Select>
        
          
        

      </Form.Item> 

      

      <Form.Item 
        name="valor"
        label="Valor da venda"
        rules={[
          {
            message: 'Coloque o valor de venda',
            required: true,
           
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        name="quant"
        label="Quantidade de vendas "
     
      >
        <InputNumber />
      </Form.Item>
     
    
      <Form.Item  wrapperCol={{ offset: 12, span: 25 }} >
        <Button type="primary" htmlType="submit">
         Cadastrar Venda
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


