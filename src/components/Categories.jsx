import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  
    
    }

    @media screen and (max-width: 600px) {
  
    grid-template-columns:  1fr;
  
    
    }
    
`

const Categories = () => {
  return (
    <Container>
        {categories.map( item => (
            <CategoryItem item = {item} key = {item.id}/>
        ))}
    </Container>
  )
}

export default Categories