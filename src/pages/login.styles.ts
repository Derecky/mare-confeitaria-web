import { styled } from '../lib/stitches'

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: '100vh',
  width: '100%',
  backgroundColor: '$blue-1',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',
})

export const ImageContainer = styled('img', {
  height: '360px',
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  backgroundColor: '$yellow-2',
  height: '180px',
  width: '320px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$blue-3',
})

export const LabelContainer = styled('label', {
  marginLeft: '1rem',
  marginRight: '0.25rem',
  color: '$blue-1',
  lineHeight: '$base',
  fontWeight: '$bold',
})

export const InputContainer = styled('input', {
  height: '32px',
  width: '180px',
  borderRadius: '$sm',
  backgroundColor: '$white',
  borderWidth: '2px',
  borderColor: '$blue-1',
  borderStyle: 'solid',
  fontSize: '$md',
  fontFamily: 'roboto',
  padding: '0.5rem',
})

export const ButtonContainer = styled('button', {
  height: '32px',
  width: '120px',
  backgroundColor: '$white',
  borderRadius: '$sm',
  borderWidth: '2px',
  borderColor: '$blue-1',
  borderStyle: 'outset',
  color: '$blue-1',
  lineHeight: '$tall',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$gray-2',
    borderColor: '$blue-2',
  },

  '&:focus': {
    backgroundColor: '$gray-3',
    borderColor: '$blue-3',
  },
})
