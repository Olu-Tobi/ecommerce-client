import { Send } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    height: 50vh;
    }

  @media screen and (max-width: 600px) {
    height: 40vh;
    }
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 50px;
    }
  @media screen and (max-width: 600px) {
    font-size: 30px;
    }
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    }


`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
