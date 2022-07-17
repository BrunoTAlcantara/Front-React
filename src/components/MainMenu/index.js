import { UserOutlined } from '@ant-design/icons';
import {ShoppingOutlined , SmileOutlined , SecurityScanOutlined,ShopOutlined   } from '@ant-design/icons';
import React , { useState} from 'react';
import { Typography } from 'antd';
import{Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './index.css';
import {useSelector} from 'react-redux'


const baseurl = 'http://localhost:3000'



const { Sider } = Layout;
const { Title } = Typography;


const MainMenu = () => {

  const { name } = useSelector(state => state.auth)



  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    window.location.assign(baseurl+e.key)
    setCurrent(e.key);
  };

  console.log(current)

  if (current==='5') {
    window.location.assign(baseurl+"/sales-create")
  }

  if(current==='1') {
   
  }
  if(current==='2') {
    window.location.assign(baseurl+"/clients-create")
  } 
  if(current==='2') {
    window.location.assign(baseurl+"/product-create")
  }
    


  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Clientes', 'sub1', <SmileOutlined />, [
      getItem('Lista de Clientes', '/'),
      getItem('Cadastrar Clientes', "/clients-create"),
     
    ]),
    getItem('Produtos', 'sub2', <ShoppingOutlined />, [
      getItem('Lista de Produtos', '/product-list'),
      getItem('Cadastrar Produtos', '/product-create'),
     
    ]),
    getItem('Vendas', 'sub3', <ShopOutlined />, [
      getItem('Lista de Vendas', '/sales-list'),
      getItem('Cadastrar  Venda', '/sales-create'),
    
    ]),
    getItem('Logs', 'sub4', <SecurityScanOutlined />, [
      getItem('Logs do sistema', '7'),
    ]),
  ];



  return  (
    <Sider
breakpoint="lg"
collapsedWidth="0"
onBreakpoint={(broken) => {
  console.log(broken);
}}
onCollapse={(collapsed, type) => {
  console.log(collapsed, type);
}}
>
  <div className='usuario'>
    <Title  style={{color: 'white',fontWeight: '600'}}level={4}>Seja Bem vindo,  {name}</Title>
   

</div>
  <Menu
        
        theme='dark'
        defaultOpenKeys={['sub1']}
        onClick={onClick}
        mode="inline"
        items={items}
      />
</Sider>
  )



}

export {MainMenu}