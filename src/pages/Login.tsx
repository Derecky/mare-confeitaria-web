import {
  ButtonContainer,
  FormContainer,
  ImageContainer,
  InputContainer,
  LabelContainer,
  MainContainer,
} from './login.styles'

import logomare from '../assets/mare@3x.png'

export function Login() {
  return (
    <MainContainer>
      <ImageContainer src={logomare} alt="" />
      <FormContainer>
        <div>
          <LabelContainer>Email: </LabelContainer>
          <InputContainer type="text" placeholder="Email"></InputContainer>
        </div>
        <div>
          <LabelContainer>Senha: </LabelContainer>
          <InputContainer type="password" placeholder="Senha"></InputContainer>
        </div>
        <ButtonContainer>Entrar</ButtonContainer>
      </FormContainer>
    </MainContainer>
  )
}
