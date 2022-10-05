import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
    flex-direction: column;
  }

`

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;

    @media (max-width: 650px){
        width: 80%;
    }
`
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
    @media (max-width: 650px){
        width: 80%;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    outline: none;

    &:focus{
        box-shadow: 0px 0px 10px #CCC;
    }
    
`
export const Select = styled.select`
    width: 100%;
    height: 30px;
    border: 1px solid lightblue;
    border-radius: 5px;
    @media (max-width: 650px){
        width: 100%;
    }
`
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color: white;
    }
`
