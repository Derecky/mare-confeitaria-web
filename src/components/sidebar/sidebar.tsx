import { ButtonContainer, SidebarContainer } from './sidebar.styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <ButtonContainer>Gastos</ButtonContainer>
      <ButtonContainer>Materiais</ButtonContainer>
      <ButtonContainer>Receitas</ButtonContainer>
      <ButtonContainer>Composições</ButtonContainer>
      <ButtonContainer>Categorias</ButtonContainer>
      <ButtonContainer>Produtos</ButtonContainer>
      <ButtonContainer>Metas</ButtonContainer>
    </SidebarContainer>
  )
}
