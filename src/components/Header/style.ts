import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 15rem;

  nav {
    display: flex;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 8px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const Cart = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
`
