import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {MainMenu} from '../components/MainMenu'
import { Layout} from 'antd';
const { Content} = Layout;




const Template = ({children}) => (
  <Layout  className="layout">
   
    <Layout>
      <MainMenu/>
      
    
      <Content
        style={{
          margin: '24px 16px 0',
          
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
      
      {children}
        </div>
      
      </Content>
     
    </Layout>
  </Layout>
);

export  {Template};