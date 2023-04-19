import {
  ButtonContainer,
  FormContainer,
  ImageContainer,
  InputContainer,
  LabelContainer,
  MainContainer,
} from '../styles/pages/login.styles'

import logomare from '../assets/mare@3x.png'

export function Login() {
  return (
    <MainContainer>
      <ImageContainer src={logomare} alt="" />
      <FormContainer>
        <LabelContainer>Login</LabelContainer>
        <InputContainer type="text" placeholder="Email"></InputContainer>
        <InputContainer type="password" placeholder="Senha"></InputContainer>
        <ButtonContainer>Entrar</ButtonContainer>
      </FormContainer>
    </MainContainer>
  )
}
