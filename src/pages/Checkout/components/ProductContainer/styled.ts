import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const BuyConainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding-bottom: 8px;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Buttons = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    width: 72px;
    height: 32px;
    background: red;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    font-family: 'Roboto';

    span {
      cursor: pointer;
      font-family: 'Roboto';
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
