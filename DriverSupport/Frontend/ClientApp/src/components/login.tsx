import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

const Login = () => {
  const navigate = useNavigate();
  return (
  <Container>
    <div>

    <Row>
      <h1>Allwin</h1>
    </Row>
    <Row>
      <Button onClick={() => navigate('home')}>Login</Button>
    </Row>
    </div>
  </Container>)
}

export default Login;