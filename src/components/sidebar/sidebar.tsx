import { ButtonContainer, SidebarContainer } from './sidebar.styles'

const buttons = [
  'Gastos',
  'Materiais',
  'Receitas',
  'Composições',
  'Categorias',
  'Produtos',
  'Metas',
]

export function Sidebar() {
  return (
    <SidebarContainer>
      {buttons.map((button) => (
        <ButtonContainer key={button}> {button} </ButtonContainer>
      ))}
    </SidebarContainer>
  )
}
