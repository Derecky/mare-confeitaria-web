import { HeaderContainer, ImageContainer, SpanContainer } from './header.styles'
import marelogo from '../../assets/mare@3x.png'

export function Header() {
  return (
    <HeaderContainer>
      <ImageContainer src={marelogo} alt="logomare" />
      <SpanContainer>Bem-vindo(a), Usuário(a)</SpanContainer>
    </HeaderContainer>
  )
}
