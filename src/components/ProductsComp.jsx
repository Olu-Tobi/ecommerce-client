import styled from 'styled-components'

import ProductComp from './ProductComp'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    
`

const ProductsComp = ({cat, filters, sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect( ()=>{
//     fetchItems();
// }, [cat]);



// const fetchItems = async () =>{
//     const data = await fetch('/api/products');
//     const newItems = await data.json();
//     setProducts(newItems);
// }

  useEffect( ()=> {
    const getProducts = async () => {
      try{
        const res = await axios.get(
          cat
            ? `https://ecommerce-app-api.onrender.com/api/products?categories=${cat}`
            : "https://ecommerce-app-api.onrender.com/api/products"
        );
        setProducts(res.data);
      }catch(err){

      };
    };
    getProducts();
  }, [cat]);

  useEffect (() => {
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      ))
    );
  }, [products,cat,filters]);

  useEffect( ()=> {
    if(sort === "Newest"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
        )
    }else if (sort === "asc"){
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
        )
    }else{
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => b.price - a.price)
        )
    }
  }, [sort])

  return (
    <Container>
        {cat ? filteredProducts.map( item => (
            <ProductComp item={item} key={item.id}/>))
            : products
            .slice(0, 8)
            .map( item => (
            <ProductComp item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default ProductsComp