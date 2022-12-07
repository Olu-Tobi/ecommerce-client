import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div`
background-color: white;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media screen and (max-width: 600px) {
    padding: 10px;
    }

  

`;

const ImgContainer = styled.div`
  flex: 1;
  height: 90vh;

  @media screen and (max-width: 1023px) {
    height: 50vh;
    }

    @media screen and (max-width: 600px) {
    height: 40vh;
    }
`;

const Image = styled.img`
  width: fit-content;
  height: 80%;
  object-fit: cover;

  @media screen and (max-width: 1023px) {
    height: 60%;
    }


    @media screen and (max-width: 600px) {
    height: 55%;
    width: fit-content;
    }

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media screen and (max-width: 600px) {
    padding: 0 5px;
    }

`;

const Title = styled.h1`
  font-weight: 200;

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    }
`;

const Desc = styled.p`
  margin: 20px 0px;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    }
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    }
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
   width: 80%;
  }

  
  @media screen and (max-width: 600px) {
    margin: 20px 0;
    width: 95%;
    }

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    }
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 15px;
  height: 15px;
    }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;

  @media screen and (max-width: 600px) {
    padding: 3px;
    }
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
   width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    }
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
 
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;

  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
    margin: 0 3px;
    }
`;

const RemoveBtn = styled(Remove)`
@media screen and (max-width: 600px) {
    font-size: 1.2rem !important;
    }
`

const AddBtn = styled(Add)`
@media screen and (max-width: 600px) {
    font-size: 1.2rem !important;
    }
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.65rem;
    padding: 8px 7px;
    }
`;

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] =useState("")
  const dispatch = useDispatch()


  useEffect( () => {
    const getProduct = async () => {
      try{
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      }catch{}
    }
    getProduct()
  }, [id])

  const sizeArray = product.size;
  const colorArray = product.color

  const handleQuantity = (type) => {
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1)
    }else {
      setQuantity(quantity+1)
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color, size})) 
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {colorArray?.map((c) => (
                <FilterColor color={c} key = {c} onClick = {() => setColor(c)}/>
              ))}
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>

              <FilterSize onChange={(e)=> setSize(e.target.value)}>
              {sizeArray?.map( (s) => 
                ( <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
              </FilterSize>

            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveBtn onClick = { () => handleQuantity("dec") }/>
              <Amount>{quantity}</Amount>
              <AddBtn onClick = { () => handleQuantity("inc") }/>
            </AmountContainer>
            <Button onClick = {handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
