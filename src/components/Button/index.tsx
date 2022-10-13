import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

export function Button({ text, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>
}
