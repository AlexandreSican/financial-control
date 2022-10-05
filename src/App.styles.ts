import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #21074a;
  @media (max-width: 650px){
        height: 100%;
    }
`
export const Header = styled.div`
  background-color: #0d021f;
  height: 150px;
  text-align: center;
  border-bottom: 1px solid white;
`

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  padding-top: 30px;
`

export const Body = styled.div`
  margin: auto;
  max-width: 1280px;
  width: 90%;
  margin-bottom: 50px;
`