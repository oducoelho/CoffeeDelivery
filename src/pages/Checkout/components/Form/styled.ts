import styled from 'styled-components'
export const FormContainer = styled.div`
  width: 640px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  h3,
  p,
  img,
  form {
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
export const Component = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 15px;
  }
`
export const OptionsContainer = styled.div`
  width: 640px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${(props) => props.theme['base-error']};
    padding: 0;
  }
  /*display: flex;
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
  }*/
`
export const AddressContainer = styled.div`
  background-color: transparent;
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`
