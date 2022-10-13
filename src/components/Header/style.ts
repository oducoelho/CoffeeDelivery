import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 24rem;
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

      img {
        background-color: transparent;
      }
    }
  }
`

export const Cart = styled.div`
  img {
    background-color: transparent;
  }

  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 8px;
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
