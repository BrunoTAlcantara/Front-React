 import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Tabela } from "../Table";







  

export const ListClients = () => {
   const [clients,setClients] = useState([])
  useEffect(()=>{
    api.get('/clients').then(client => {
      const clients = client.data
      setClients(clients)
      
    })
  },[])


  const columns = [
  {
    title: 'Social',
    dataIndex: 'social',
    key: 'social',
    
  },
  {
    title: 'Cnpj',
    dataIndex: 'cnpj',
    key: 'cnpj',
  },
  {
    title: 'Cnpj',
    dataIndex: 'ender',
    key: 'ender',
  },]




  
  return (
    <Tabela columns={columns} dataSource={clients}  />
  );
};


