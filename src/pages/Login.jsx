import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(../login.jpg) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const LinkContainer = styled.div`
    
`

const Link = styled.a`
    margin: 5px 10px 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Form>
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <Button>Login</Button>
          <LinkContainer>
          <Link>비밀번호찾기</Link>
          <Link>회원가입</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login