import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  widtth: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordContainer = styled.div`
  background-color: #383a4e;
  border-radius: 10px;
  border: 0px none;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 300px;
    width: 300px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const TextInput = styled.input`
  background-color: #edeeff;
  height: 40px;
  width: 300px;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-top: 10px;
    width: 100px;
  }
`

export const ErrorText = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
