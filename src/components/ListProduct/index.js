 import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Tabela } from "../Table";

export const ListProducts = () => {
const [products,setProducts] = useState([])
  useEffect(()=>{
    api.get('/product').then(product => {
      const products = product.data
      setProducts(products)
      
    })
  },[])

  console.log(products.data)

  const columns = [
  {
    title: 'Descrição',
    dataIndex: 'desc',
    key: 'desc',
    
  },
  {
    title: 'Unidade de Medida',
    dataIndex: 'unMed',
    key: 'unMed',
  },
  {
    title: 'Preco',
    dataIndex: 'preco',
    key: 'preco',
  },
  {
    title: 'valor',
    dataIndex: 'valor',
    key: 'valor',
  },
]




  
  return (
    <Tabela columns={columns} dataSource={products}  />
  );
};


