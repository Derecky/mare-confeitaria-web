import { styled } from '../../lib/stitches'

export const SidebarContainer = styled('aside', {
  backgroundColor: '$yellow-1',
  height: '40rem',
  width: '15rem',
  borderWidth: '2px',
  borderRadius: '$sm',
})

export const ButtonContainer = styled('button', {
  backgroundColor: '$yellow-2',
  height: '46px',
  width: '100%' /* Design System = 120px */,
  border: '1',
  color: '$gray-1',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: 'roboto',
  textAlign: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',
  padding: '$4',
  gap: '$2',
  borderWidth: '2px',
  borderColor: '$yellow-3',
  borderStyle: 'outset',
  '&:hover': {
    backgroundColor: '$yellow-1',
  },
  '&:focus': {
    backgroundColor: '$yellow-3',
    // borderColor: '$white',
  },
})
