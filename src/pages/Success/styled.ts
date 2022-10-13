import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin: 7rem 24rem;
  display: grid;
  gap: 8rem;
  grid-template-columns: repeat(2, 1fr);
  display: flex;
  justify-content: space-between;
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardContainer = styled.div`
  margin-top: 4rem;
  padding: 40px 200px 40px 40px;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['base-subtitle']};
`

export const Items = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 1rem 0;
  }
`

export const Img = styled.div`
  margin-top: 8rem;
`
