import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  font-family:"Roboto";
`

export const PasswordValidatorContainer = styled.div`
  background-color: #24263c;
  padding: 20px;
  text-align: center;
  color: #f8fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
`

export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 5px;
`
export const Message = styled.p`
  color: white;
  margin-top: 5px;
`
export const Heading = styled.h1`
 color:white;
 font-size:32px;
 font-family:"Roboto";
`
