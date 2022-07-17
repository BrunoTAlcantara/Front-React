 import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Tabela } from "../Table";

export const ListSales = () => {
const [sales,setSales] = useState([])
  useEffect(()=>{
    api.get('/sales').then(res => {
      const sales = res.data
      setSales(sales)
      
    })
  },[])

 

  const columns = [
  {
    title: 'Valor',
    dataIndex: 'valor',
    key: 'valor',
    
  },
  {
    title: 'Quantidade',
    dataIndex: 'quant',
    key: 'quant',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
 
  {
    title: 'clients',
    dataIndex: 'clients',
    key: 'clients',
  },
  {
    title: 'products',
    dataIndex: 'products',
    key: 'products',
  },
]






  
  return (
    <Tabela columns={columns} dataSource={sales}  />
  );
};


