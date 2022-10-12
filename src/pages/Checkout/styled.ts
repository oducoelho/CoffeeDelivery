import styled from 'styled-components'

export const FormContainer = styled.main`
  margin: 7rem 15rem;
  display: grid;
  gap: 8rem;
  grid-template-columns: repeat(2, 1fr);
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
