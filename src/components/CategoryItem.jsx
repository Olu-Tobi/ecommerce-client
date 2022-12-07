import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    @media screen and (max-width: 1024px) {
    height: 50vh; 
    }

    @media screen and (max-width: 600px) {
    height: 35vh; 
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

    @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    }
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;

    @media screen and (max-width: 600px) {
    padding: 7px;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
        
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>

    </Link>
    </Container>
  )
}

export default CategoryItem