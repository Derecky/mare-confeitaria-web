import { styled } from '../../lib/stitches'

export const HeaderContainer = styled('header', {
  display: 'flex',
  boxSizing: 'border-box',
  backgroundColor: '$blue-1',
  height: '10rem',
  widht: '100%',
  alignContent: 'center',
  justifyContent: 'space-between',
})

export const ImageContainer = styled('img', {
  boxSizing: 'border-box',
  display: 'flex',
  height: '$40',
  width: '$80',
  marginLeft: '$20',
})

export const SpanContainer = styled('span', {
  color: '$white',
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$tall',
  marginRight: '$20',
  marginTop: '$20',
})
