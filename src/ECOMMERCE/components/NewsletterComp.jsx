import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 55vh;
  background-color: #e9fffc;
`;
const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const Descri = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 28px;
  ${mobile({ textAlign: "center" })}
`;

const InputWrap = styled.div`
  height: 45px;
  width: 45%;

  border: 1px solid #c7c7c7;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 6;
  padding-left: 18px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #3b5b85;
  color: white;
  cursor: pointer;
`;

const NewsletterComp = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Descri>Get updates...</Descri>
      <InputWrap>
        <Input placeholder="email@email.com" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputWrap>
    </Container>
  );
};

export default NewsletterComp;
