import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(../register.jpg) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`;

const AgreementContainer = styled.div`
    margin-top: 20px;
`

const Agreement = styled.span`
    font-size: 12px;
`;
const Button = styled.button`
    width: 45%;
    border: none;
    margin-top: 20px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>계정만들기</Title>
        <Form>
          <Input placeholder="이름" />
          <Input placeholder="성" />
          <Input placeholder="아이디" />
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호확인" />
          <AgreementContainer>
          <Agreement>
            계정을 만들면 개인 정보 보호 정책에 따라 개인 데이터를 처리하는 데
            동의합니다.
          </Agreement>
          <Button>회원가입</Button>
          </AgreementContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
