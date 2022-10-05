import styled from "styled-components";

export const Container = styled.div<{colorTheme:boolean}>`
  height: 100vh;
  /* background-color: #21074a; */
  background-color: ${props => !props.colorTheme ? '#7788a3' : '#19246e'};
  transition: 0.5s;
  @media (max-width: 650px){
        height: 100%;
    }
`
export const Header = styled.div<{colorTheme:boolean}>`
  background-color: ${props => !props.colorTheme ? '#ebebeb' : '#050c3b'};
  height: 150px;
  text-align: center;
  border-bottom: 1px solid white;
  transition: 0.5s;
`

export const HeaderText = styled.h1<{colorTheme:boolean}>`
  margin: 0;
  padding: 0;
  color: ${props => !props.colorTheme ? 'black' : 'white'};
  padding-top: 30px;
  transition: 0.5s;
`

export const Body = styled.div`
  margin: auto;
  max-width: 1280px;
  width: 90%;
  margin-bottom: 50px;
`

export const Box = styled.div<{colorTheme:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${props => !props.colorTheme ? 'black' : 'white'};
  transition: 0.5s;
`