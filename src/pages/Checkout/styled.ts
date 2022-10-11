import styled from 'styled-components'

export const FormContainer = styled.main`
  margin: 7rem 15rem;
  display: grid;
  gap: 8rem;
  grid-template-columns: repeat(2, 1fr);
`
export const RequestCard = styled.div`
  width: 640px;
  height: 372px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  h3,
  p,
  img,
  form {
    background: transparent;
  }
`
export const RequestContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 15px;
  }

  h3 {
    display: flex;
    gap: 0.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1.7rem;
    padding-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 560px;
    height: 216px;

    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;

      width: 560px;
      height: 42px;
    }
  }
`
export const CEPAdress = styled.input`
  border-radius: 4px;
  padding: 12px;
  gap: 4px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  width: 200px;
  height: 42px;
`
export const AdressName = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  border-radius: 4px;

  width: 560px;
  height: 42px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
`
export const NumberOfAdress = styled.input`
  border-radius: 4px;
  padding: 12px;
  gap: 4px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  width: 200px;
  height: 42px;
`
export const Complement = styled.input`
  width: 348px;
  height: 42px;
  border-radius: 4px;
  padding: 12px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
`
export const District = styled.input`
  border-radius: 4px;
  padding: 12px;
  gap: 4px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  width: 200px;
  height: 42px;
`
export const City = styled.input`
  border-radius: 4px;
  padding: 12px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  width: 276px;
  height: 42px;
`
export const UF = styled.input`
  border-radius: 4px;
  padding: 12px;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  width: 60px;
  height: 42px;
`
export const PayContainer = styled.div`
  width: 640px;
  height: 207px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  margin-top: 12px;

  h3,
  p,
  img,
  div {
    background: transparent;
  }

  h3 {
    display: flex;
    gap: 0.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1.7rem;
    padding-bottom: 32px;
  }
`
export const OptionsOfPay = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;

  div {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 16px;
    gap: 12px;

    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    width: 178.67px;
    height: 51px;
    transition: 0.5ms;
    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['purple-light']};
      //border: 1px solid ${(props) => props.theme.purple};
    }
  }
`
export const SelectedCoffees = styled.div`
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
  height: 498px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 45px 45px 378px 60px;
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
export const ProductContainer = styled.div`
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
    max-width: 5rem;
    height: 100%;
    background: red;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    font-family: 'Roboto';
    padding: 1rem;

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
  img {
    width: 16px;
    height: 16px;
  }
`
