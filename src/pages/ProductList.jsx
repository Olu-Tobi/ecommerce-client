import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import ProductsComp from "../components/ProductsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
background-color: white;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 5px;
    }
 
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
    margin-bottom: 5px;
    }

`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("Newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  const Btn = styled.button`
  padding: 10px;
  margin-right: 20px;
  background: transparent;
  border: 1px solid;

  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    }
  
`;

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
            <Btn onClick={refreshPage}>All products</Btn>
          <Select name = "color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option value="#000">black</Option>
            <Option value="#ece0d3">cream</Option>
            <Option value="#fed562">yellow</Option>
            <Option value="#11916c">green</Option>
            <Option value="#666040">camo green</Option>
            <Option>gray</Option>
            <Option value="#c5ab90">brown</Option>
          </Select>
          <Select name = "size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange ={(e) => setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsComp cat = {cat} filters={filters} sort = {sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
