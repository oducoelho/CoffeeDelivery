import styled from 'styled-components'

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const RegularText = styled.p<RegularTextProps>`
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
