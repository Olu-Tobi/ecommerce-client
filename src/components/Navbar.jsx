import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';

import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';



//style components

const Container = styled.div`
  height: 60px;
  background-color: white;

  @media screen and (max-width: 600px) {
     height: 40px;
     
     
     
    }
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
     padding:5px 20px;
     margin-top: 5px;
    }
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
        display: none;
    }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  
`;

const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  @media screen and (max-width: 600px) {
    text-align: left;
    }
`;

const Logo = styled.h1`
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    }
 
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media screen and (max-width: 600px) {
    margin-left: 15px;
    font-size:10px;
    }
 
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const Span = styled.span`
font-size: 18px;

@media screen and (max-width: 600px) {
  font-size: 11px;
    }

`

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: 'gray', fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo><Span >KIN</Span>VOGUE</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <StyledLink to="/cart">
                  <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                      <ShoppingCartOutlined/>
                  </Badge>
                  </MenuItem>
                </StyledLink>
            </Right>
         </Wrapper>
    </Container>
  )
}

export default Navbar