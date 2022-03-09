import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
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
  padding: 20px;
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
      <Description>메일을 남기시면 관심 상품의 정보를 제일 먼저 알려드립니다</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
