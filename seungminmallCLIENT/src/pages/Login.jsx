import { useState } from "react";
import styled from "styled-components";
import {login} from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(../login.jpg) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
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
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const LinkContainer = styled.div``;

const Link = styled.a`
  margin: 5px 10px 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  };

  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Form>
          <Input
            placeholder="아이디"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>잘못 입력하셨습니다</Error>}
          <LinkContainer>
            <Link>비밀번호찾기</Link>
            <Link>회원가입</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
