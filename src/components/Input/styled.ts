import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  background-color: transparent;

  > p {
    color: ${(props) => props.theme['base-error']};
    padding: 0;
  }
`
interface InputContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-top: 2rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`
