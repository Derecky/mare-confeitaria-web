import { styled } from '../../lib/stitches'

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: '100vh',
  width: '100%',
  gap: '$20',
  backgroundColor: '$blue-1',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'roboto, sans-serif',
})

export const ImageContainer = styled('img', {
  height: '$64',
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  backgroundColor: '$blue-3',
  height: '$48',
  width: '$80',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '$blue-3',
  borderRadius: '$sm',
  borderStyle: 'solid',
  gap: '$2',
  padding: '$2',
})

export const LabelContainer = styled('label', {
  color: '$white',
  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$tall',
})

export const InputContainer = styled('input', {
  height: '$10',
  width: '$80',
  backgroundColor: '$white',
  borderColor: '$blue-1',
  borderRadius: '$sm',
  borderStyle: 'solid',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  padding: '$2',
})

export const ButtonContainer = styled('button', {
  height: '$8',
  width: '$30',
  backgroundColor: '$yellow-2',
  borderColor: '$gray-2',
  borderRadius: '$sm',
  borderStyle: 'outset',
  color: '$white',
  lineHeight: '$tall',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$yellow-1',
    borderColor: '$gray-1',
  },

  '&:focus': {
    backgroundColor: '$yellow-3',
    borderColor: '$gray-3',
  },
})
