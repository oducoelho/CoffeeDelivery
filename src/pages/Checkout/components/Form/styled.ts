import styled from 'styled-components'
export const FormContainer = styled.div`
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
