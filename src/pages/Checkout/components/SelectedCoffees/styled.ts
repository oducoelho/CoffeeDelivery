import styled from 'styled-components'
export const StyledCoffees = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 15px;
  }
`
export const CheckoutContainer = styled.div`
  width: 448px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 45px 45px 45px 60px;
  width: 100%;
  img {
    width: 64px;
    height: 64px;
  }
  p {
    font-family: 'Roboto';
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  nav {
    span {
      //border-top: 1px solid ${(props) => props.theme['base-button']};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      display: flex;
      justify-content: space-between;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
    }
    button {
      width: 100%;
      height: 45px;
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.yellow};
      border: none;
      border-radius: 6px;
      margin-top: 24px;
      cursor: pointer;
    }
  }
  div,
  p,
  img,
  span,
  nav,
  strong {
    background-color: transparent;
  }
`
